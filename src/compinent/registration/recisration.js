import style from './reg.module.css'
import { useState } from 'react'
import axios from "axios"
export function Reg(){
    const [name,setName]=useState(null)
    const [email,setEmail]=useState(null)
    const [pass,setPass]=useState(null)
   
    const typeChangename =(e)=>{
        setName(e.target.value)
    }
    const typeChangeemail =(e)=>{
        setEmail(e.target.value)
    }
    const typeChangepass =(e)=>{
        setPass(e.target.value)
    }
    const handleClick =()=>{
        axios.post("http://localhost:3001/user",{
            userName:name,
            email:email,
            password:pass
          })
          .then((result)=>{
            console.log(result.data)
          })
        //   .catch((err)=>{
            
        //     console.log(err)
           
        //   })
    }
    return(
        <div className={style.reg}>
            <div className={style.container}>
            {/* {error && <div>{error}</div>} */}
            <input type="text" placeholder='Enter your name' onChange={typeChangename} />
            <input type="text" placeholder='Enter your email' onChange={typeChangeemail} />
            <input type="text" placeholder='Enter your password' onChange={typeChangepass} />
            <button onClick={handleClick}>Registration</button>
            </div>
        </div>
    )
}