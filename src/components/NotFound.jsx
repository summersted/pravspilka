import React from 'react';
import classes from '../style-modules/consult.module.css'
import Image from "../images/404.png"

let NotFound = () =>{
    return(
        <div>
            <h1 className={classes.tittle}>Сталася помилка!</h1>
            <h2>Такої сторінки не існує, перевірте правильність шляху.</h2>
            <img id="NotFondImage" src={Image} alt=""/>
        </div>
    );
}

export default NotFound;