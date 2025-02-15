import axios from 'axios';
import { useEffect, useState } from 'react';

const HtmlListDemo = () =>{

    const [data,setData] = useState([])

    const getData = ()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        getData()
    },[])
    return(
        <>
            <h3>List Demo</h3>
            <div style={{display: 'flex'}}>
            {
                data.map((item,index)=>(
                    <div style={{height:'70px', width:"130px" , backgroundColor:'gray'
                    }}>
                        <h3>{item.name}</h3>
                    </div>
                 ) )
            }
            </div>

        </>
    )
}

export {HtmlListDemo}