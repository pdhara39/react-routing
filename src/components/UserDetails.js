import { useParams } from "react-router-dom"
export default function UserDetails(){
    const {userId} = useParams();
    return (
        <>
        <h1>user details page {userId}</h1>
        </>
    )
}