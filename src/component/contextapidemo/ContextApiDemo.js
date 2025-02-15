import { createContext } from "react"
import { ChildComponent } from "./ChildComponent"


const data = createContext();
const data1 = createContext();

const ContextApiDemo = () =>{
  const name='Anjali';
  const gender = 'Female';

    return(
        <>
            <h1>Context Api Demo</h1>
            <data.Provider value={name}>
                <data1.Provider value={gender}>
                    <ChildComponent />
                </data1.Provider>
            </data.Provider>
        </>
    )
}

export {ContextApiDemo,data,data1}