import { useContext } from "react"
import { data,data1 } from "./ContextApiDemo"

const ChildComponent = () =>{

    const name = useContext(data);
    const gender = useContext(data1);
    return(
        <>
            <h1>Child Component:{name}{gender}</h1>
        </>
    )
}

export {ChildComponent}