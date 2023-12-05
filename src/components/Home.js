import { useNavigate } from "react-router-dom"
export default function Home(){
    const navigate = useNavigate();
    return(
        <div>
            <h1>HELLO HOME</h1>
            <button onClick={()=>navigate("click me",{replace:true})}>Click me</button>
        </div>
    )
}