import axios from 'axios'
import { useState } from 'react'
import style from './login.module.css'
export function Login(){
    const [email,setEmail]=useState("")
    const [password,setPass]=useState("")
    const LogIn = async ()=>{
        try{
            const data = await axios.post("http://localhost:3001/user/login",{
                email:email,
                password:password
            })
            alert("good luck")
            console.log(data)
        } catch(err){
            console.log(err)
        }
    }
    const ps=(e)=>{
        setPass(e.target.value)
    }
    const em=(e)=>{
        setEmail(e.target.value)
    }
    return(
        <div className={style.login}>
            <div className={style.container}>
            <input type="text" placeholder='Enter your name' onChange={em}/>
            <input type="text" placeholder='Enter your password' onChange={ps} />
            <button onClick={LogIn}>Login</button>
            </div>
        </div>
    )
}