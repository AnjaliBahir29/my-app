import { useState } from "react";

const ListDemo = ()=>{

    const [data ,setData] = useState([]);

    const [input,setInput] = useState('');

    const handlevent =(e)=>{
        setInput(e.target.value)
    }

    const addItem =() =>{
        if (input.trim() === "") return;
        setData([...data,input])
        setInput('')
    }

    return(
        <>
            <h4>List Demo</h4>
            <input type='text' value={input} onChange={handlevent}/>
            <button onClick={addItem}>Add Item</button>
            {
                data.map((item)=><h3>{item}</h3>)
            }
        </>
    )
}

export {ListDemo}