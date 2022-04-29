import {useState, useEffect} from "react";
import { flavorData } from "../data/flavors";


function useGenerator(props) {

    const [flavors, setFlavors] = useState(flavorData);
    
    const [chosenPrompts, setChosenPrompts] = useState([]);
    console.log(props)


    function getPrompt() {

        let promptObj = {};

        //if user hasn't selected anything from the dropdown
        if(props.theme === "") {

            let randomFlavorNum = Math.floor((Math.random() * (flavors.length - 0 + 1)) + 0);
            let randomPromptNum = Math.floor((Math.random() * (flavors[randomFlavorNum].prompts.length - 0 + 1)) + 0);
    
            let prompt = flavors[randomFlavorNum].prompts[randomPromptNum];
    
            promptObj = {
                prompt: prompt,
                flavor: flavors[randomFlavorNum].flavor,
                number: randomPromptNum + 1,
                promptType: flavors[randomFlavorNum].theme
            }
        } else {

            
            //let flavorPrompts = grabFlavors(props.theme)
            let flavorPrompts = flavors.filter(flavor => flavor.theme === props.theme);
            console.log(flavorPrompts)

            let randomFlavorNum = Math.floor((Math.random() * (flavorPrompts.length - 0 + 1)) + 0);
            let randomPromptNum = Math.floor((Math.random() * (flavorPrompts[randomFlavorNum].prompts.length - 0 + 1)) + 0);

            promptObj = {
                prompt: flavorPrompts[randomFlavorNum].prompts[randomPromptNum],
                flavor: flavorPrompts[randomFlavorNum].flavor,
                number: randomPromptNum + 1,
                promptType: flavorPrompts[randomFlavorNum].theme
            }
        }
       

        setChosenPrompts(prevState => {
            return [
                ...prevState,
                promptObj
            ]
        });
    }

    //const grabFlavors = (theme) => flavors.filter(flavor => flavor.theme === theme);

    function generateNumbers(flavorNum, promptNum) {

    }

    return {getPrompt, flavors, chosenPrompts, setChosenPrompts}
}

export default useGenerator;