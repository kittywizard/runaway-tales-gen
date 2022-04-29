import Option from "./Option";
import { nanoid } from "nanoid";
import { flavorData } from "../data/flavors";


export default function Dropdown(props){

    const dropdownMap = [];

    //get all the dupes out
    const flavorSet = new Set(flavorData.map(flavor => flavor.theme))
    
    function handleChange(event) {
        const {value} = event.target;
        
        props.setDropdownState(() => {
            return {
                theme: value
            }
        })
    }
 
    flavorSet.forEach(option => {
        dropdownMap.push(        
        <Option 
            value={option}
            key={nanoid()}
        />)
    });


    return (
       <div className="container text-center p-4">
           <label htmlFor={props.name}>Select a theme:</label>
           <select name={props.name} 
                    className="p-2 m-2 bg-gray-green-light rounded-md"
                    onChange={handleChange}
                    value={props.dropdownState.theme}
            >
                <Option value="" />
                {dropdownMap}
           </select>
       </div>
    )
}