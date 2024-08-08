import { Link } from "react-router-dom"

export default({labels})=>{
    return(
        <li>
            <Link to={labels.path}>{labels.label}</Link>
        </li>
    )
}