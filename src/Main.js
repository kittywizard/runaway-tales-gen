import { useEffect, useState } from "react";

import Button from "./components/Button";
import Prompt from "./components/Prompt";
import {nanoid } from "nanoid";
import Dropdown from "./components/Dropdown";

import useGenerator from "./hooks/useGenerator"
import useTopping from "./hooks/useTopping";
import Topping from "./components/Topping";

export default function Main() {
    const [dropdownState, setDropdownState] = useState({
        theme: ""
    });
    const [displayTopping, setDisplayTopping] = useState(false);

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
    }, [promptMap])

    return (
        <main className="container mx-auto flex-col justify-center">
            <p className="p-2 text-sm text-center">
                Runaway Tales is a prompt based writing/art challenge, originally hosted on livejournal, now hosted at  
                <a href="http://wriye.proboards.com" 
                    className="font-bold text-dark-green hover:bg-gray-green-light hover:border-b-1 hover:border-b-black"
                    rel="noreferrer" 
                    target="_blank"
                > WriYe
                </a>, a year round writing community.
                 There are over 3,500 prompts, separated into different 'flavors' based around themes (like emotions, props and actions). Pick one and get started!
            </p>
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
            <section className="max-w-2xl flex-col justify-center m-auto bg-gray-green-light p-6 my-2">
                <section className="flex justify-center items-baseline my-2">
                    <h3 className="m-4">
                        Need a topping to go with that flavor?
                    </h3>
                    <Button 
                        handleClick={getTopping}
                        buttonName={"Get Topping"}
                    />
                </section>
                    {newTopping}
            </section>
            }

            <section className="flex justify-between flex-wrap">
                {promptMap}
            </section>

        </main>
    )
}