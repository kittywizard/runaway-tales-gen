import { useEffect, useState } from "react";
import {nanoid } from "nanoid";

import Button from "./components/Button";
import Prompt from "./components/Prompt";
import Dropdown from "./components/Dropdown";
import Intro from "./Intro";

import useGenerator from "./hooks/useGenerator"
import useTopping from "./hooks/useTopping";
import Topping from "./components/Topping";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Main() {
    const [dropdownState, setDropdownState] = useState({
        theme: ""
    });
    const [displayTopping, setDisplayTopping] = useState(false);
    const [toggleTopping, setToggleTopping] = useState(true);

    const {getPrompt, chosenPrompts} = useGenerator(dropdownState);
    const {getTopping, newTopping} = useTopping();

    const promptMap = chosenPrompts.map(prompt => (
        <Prompt 
            data={prompt}
            key={nanoid()}
        />
    ));

    //need to check if promptMap gets updated and then display the topping stuff
    useEffect(() => {
        promptMap.length > 0 && setDisplayTopping(true)
    }, [promptMap]);

    function handleIconClick() {
        //set state and hide this section! also change icon
        setToggleTopping(prevState => !prevState)
    }

    return (
        <main className="container mx-auto flex-col justify-center">
            <Intro />
            <Dropdown 
                name="theme"
                dropdownState={dropdownState}
                setDropdownState={setDropdownState}
                labelName={"Select a theme:"}
            />
            <section className="flex justify-center p-6">
                <h2 className="m-2 p-2 font-bold text-2xl text-gray">Generate a Flavor?</h2>
                 <Button 
                    handleClick={getPrompt}
                    buttonName={"Generate"}
                />
            </section>

            {displayTopping &&
                <section className="max-w-2xl grid-cols-2 grid-rows-3 m-auto bg-gray-green-light p-6 my-2 shadow-sm shadow-gray-dark/30">
                    <FontAwesomeIcon 
                        icon={toggleTopping ? faAngleDown : faAngleLeft}
                        onClick={handleIconClick}
                        className="text-3xl text-dark-green hover:text-gray-dark items-end col-span-3"
                    />
                    {toggleTopping &&
                        <section className="my-2 col-span-1">
                            <div className="flex justify-center">
                                <h3 className="m-4">
                                    Need a topping to go with that flavor?
                                </h3>
                                <Button 
                                    handleClick={getTopping}
                                    buttonName={"Get Topping"}
                                />
                            </div>

                            {newTopping}
                        </section>
                    }
                </section>
            }

            <section className="flex justify-between flex-wrap">
                {promptMap}
            </section>

        </main>
    )
}