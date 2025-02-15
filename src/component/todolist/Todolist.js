import { useState } from "react"

const TodoList = () =>{

    const [task , setTask ] = useState('');

    const [todoList, setTodoList] = useState([])

    const handleTask = (e) =>{
        setTask(e.target.value)
    }

    const addTask = () =>{
        setTodoList([...todoList,task])
        setTask('')
    }

    const removeTask =(i)=>{
        setTodoList(todoList.filter((item,index)=>( index !== i)
        )
    )
}

    return(
        <>
        <input type="text" value={task} onChange={handleTask}/>
        <button onClick={addTask}>Add Task</button>
        {
            todoList.map((item,index)=>(
              <div> <h3>{item}</h3>
                <button onClick={()=>removeTask(index)}>-</button>
                </div> 
            ))
        }
        </>
    )
}

export {TodoList}