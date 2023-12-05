import { NavLink } from "react-router-dom"
export default function Navbar(){

    const navlinksstyle=({isActive})=>{
        return{
            fontWeight : isActive ? "bold":"normal",
            color: isActive? "blueviolet":"blue",
            textDecoration: isActive? "none ":"underline"
        }
    }    
    return(
    <>
    <nav>
        <NavLink style={navlinksstyle} to="/" >home</NavLink>
        <NavLink style={navlinksstyle} to="/about" >About</NavLink>
        <NavLink style={navlinksstyle} to="/contact" >Contact</NavLink>
        <NavLink style={navlinksstyle} to="/blog" >Blog</NavLink>
        <NavLink style={navlinksstyle} to="/product">Product</NavLink>

    </nav>
    </>)
}