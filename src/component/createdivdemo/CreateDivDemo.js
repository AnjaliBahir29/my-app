import { useState } from "react";

const CreateDivDemo = () =>{
    const [number,setNumber] = useState(0);


    const getNumber =(e)=>{
        setNumber(e.target.value)
    }

    const createDiv = (number) =>{
        let i=0;
        let element = []
        for( i=0;i<number;i++){
            element.push(<input />)
        }
        return element;
    }



    return(
        <>
            <h1>Create Div Demo :{number}</h1>
            <input type='text' value={number} onChange={getNumber}/>
            {
                createDiv(number)
            }
        </>
    )
}

export {CreateDivDemo}