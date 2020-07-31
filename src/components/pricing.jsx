import React from 'react';
import classes from '../style-modules/pricing.module.css'
import id from '../style-modules/pricing.module.css'

let Pricing = () => {
    return (
        <div id={id.container}>
            <div className={classes.tittle}>
                <h1>Ціни</h1>
            </div>
            <div>
                <ul>
                    <ul className={classes.markersPurple}>
                        <li className={classes.left}>1 година</li>
                        <li>400 грн</li>
                    </ul>
                    <ul className={classes.markersBlue}>
                        <li  className={classes.left}>3 години</li>
                        <li>1000 грн</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
export default Pricing;