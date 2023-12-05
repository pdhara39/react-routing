import { Outlet } from "react-router-dom"
export default function Users(){
    return (
        <>
        <h1>user 1</h1>
        <h1>user 2</h1>
        <h1>user 3</h1>
        <Outlet></Outlet>
        </>
    )
}