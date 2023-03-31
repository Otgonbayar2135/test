// import { Menu } from "../menu/menu";
import React from 'react';
import style from './header.module.css'
import { Logo } from "../logo/logo";
import { Link } from "react-router-dom";
export function Head(){

    return(
        <div className={style.header}>
            <Logo />
           <div className={style.menu}>
           <Link to="/">home</Link>
            <Link to="/Create">Create</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Reg">Register</Link>
           </div>
          
        </div>
    )
}