import { transform } from "framer-motion";
import { useDropdown } from "./Dropdown";

export default function DropdownMenu({children,...props}){
 const { isOpened }= useDropdown()
 return  isOpened ? (
    <div
    style={Object.assign(
        {
            border:"1px solid black",
            minWidht:200,
            width:"max-content",
            borderRadius:6,
            position:"absolute",
            top:"calc(100% + 20px)",
            marginBottom:"2",
            left:0,
            padding:5,
            backgroundColor:" white",
            
        },
        props.css
    )}
    
    >
        {children}
    </div>
 ) : null
};