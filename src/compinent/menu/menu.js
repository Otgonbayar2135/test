import React from "react"
import style from './menu.module.css'
export function Menu(props){
    return <div className={style.menu}> 
    <button>{props.children}</button>
    {/* <button>creat post</button>
    <button>login</button>
    <button>oogii</button> */}
    </div>
}