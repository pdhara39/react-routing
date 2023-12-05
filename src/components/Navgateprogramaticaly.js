import { useNavigate } from "react-router-dom"
export default function Navgateprogramaticaly(){
    const navigate = useNavigate();
    return(
        <>
        <h1>hii i an routed by on "Click me" button click or handler</h1>
        <button onClick={()=>navigate(-1,{replace:true})}>click me to go back</button>
        </>
    )
}