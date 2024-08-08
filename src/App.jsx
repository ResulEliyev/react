import { BrowserRouter, Route,  Routes } from "react-router-dom"
import RoutLayout from "./components/RoutLayout"
import Home from "./ui/Home"
import Cart from "./ui/Cart"


export default()=>{
    return(
        <BrowserRouter>
        <Routes >
        <Route path="/" element={<RoutLayout/>}>
        <Route index element={<Home/>}/>
        <Route  path=":id" element={<Cart/>}/>

        </Route>
        </Routes>
        
        </BrowserRouter>
    )
}