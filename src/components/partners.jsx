import React from 'react';
import classes from '../style-modules/partners.module.css'
import id from '../style-modules/partners.module.css'

let Partners = () => {
    return (
        <div id={id.container}>
            <div>
                <h1 className={classes.tittle}>Мої партнери</h1>
            </div>
            <div>
                <p id={id.paragraph}>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Libero provident quasi culpa fugiat eos neque, 
                maiores minus natus autem velit quas iure, quos iusto possimus 
                tempore nesciunt, enim in distinctio.</p>
            </div>
        </div>
    );
}
export default Partners;