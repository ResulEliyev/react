import { Link } from "react-router-dom"

export default({nav})=>{
    return(
        <li>
            <Link to={nav.path}>{nav.label}
            </Link>
        </li>
    )
}