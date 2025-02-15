import { useState } from "react";

const FormDemo = () => {
    const [inputData, setInputData] = useState({ name: '', email: '', password: '' });

    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value });
    };

    console.log(inputData);

    return (
        <>
            <form>
                <div>
                    <h1>Registration Form</h1>
                    <div>
                        <input 
                            type='text' 
                            placeholder="Enter your name" 
                            name="name" 
                            value={inputData.name} 
                            onChange={handleData} 
                        /><br/><br/>

                        <input 
                            type='text' 
                            placeholder="Enter your Email" 
                            name="email" 
                            value={inputData.email} 
                            onChange={handleData} 
                        /><br/><br/>

                        <input 
                            type='password' 
                            placeholder="Enter your Password" 
                            name="password" 
                            value={inputData.password} 
                            onChange={handleData} 
                        /><br/><br/>
                    </div>
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export { FormDemo };
