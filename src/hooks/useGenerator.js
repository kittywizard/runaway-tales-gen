import {useState, useEffect} from "react";
import { flavorData } from "../data/flavors";


function useGenerator(props) {

    const [flavors, setFlavors] = useState(flavorData);
    const [chosenPrompts, setChosenPrompts] = useState([]);


    function getPrompt() {

        let promptObj = {};

        //if user hasn't selected anything from the dropdown, grab from all flavors

        //add another condition to check for:
            //if user selected a specific flavor
        if(props.theme === "") {
            const allNumbers = generateNumbers(flavors);
            promptObj = setPromptObj(allNumbers[0], allNumbers[1], flavors);

        } else {
            const flavorPrompts = flavors.filter(flavor => flavor.theme === props.theme);
            const numbers = generateNumbers(flavorPrompts);
            promptObj = setPromptObj(numbers[0], numbers[1], flavorPrompts);
        }
       

        //set state
        setChosenPrompts(prevState => {
            return [
                ...prevState,
                promptObj
            ]
        });
    }

    //random number generator
    function generateNumbers(flavorArray) {

        let randomFlavorNum = Math.floor((Math.random() * flavorArray.length) + 0);
        let randomPromptNum = Math.floor((Math.random() * flavorArray[randomFlavorNum].prompts.length) + 0); //fix later - a few prompt arrays don't have a length of 30

        return [
            randomFlavorNum,
            randomPromptNum
        ]
    }

    function setPromptObj(randomFlavor, randomPrompt, array) {
        return {
            prompt: array[randomFlavor].prompts[randomPrompt],
            flavor: array[randomFlavor].flavor,
            number: randomPrompt + 1,
            promptType: array[randomFlavor].theme
        }
    }

    return {getPrompt, flavors, chosenPrompts, setChosenPrompts}
}

export default useGenerator;