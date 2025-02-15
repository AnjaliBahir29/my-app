import {useRef,useState} from 'react';
 
const UseRefDemo = () =>{
    const refElement = useRef('');
    const [name,setName] = useState('');

    const reset = () =>{
        setName('');
        refElement.current.focus();
    }
    return(

        <>
            <h1>Use Ref Demo : {name}</h1>
            <input ref={refElement} type='text' value={name} onChange={(e)=>{
                setName(e.target.value)
            }} />
            <button onClick={reset}>Reset</button>
        </>
    )
}

export {UseRefDemo}