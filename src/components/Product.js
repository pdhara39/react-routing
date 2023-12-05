import { Link,Outlet } from "react-router-dom";
export default function Product(){
    return(
        <>
        <h1>Product List</h1>
            <nav>
                <Link to="phone">Phone List</Link>
                <Link to="lepi">Laptop List</Link>
            </nav>
            <Outlet/>
        </>
    )
}