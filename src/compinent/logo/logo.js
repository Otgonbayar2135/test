import style from './logo.module.css'

export function Logo(){

    return(
        <div className={style.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/2560px-Los_Angeles_Lakers_logo.svg.png" alt='logo'/>
        </div>
    )
}