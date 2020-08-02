import React from 'react';
import classes from '../style-modules/pricing.module.css'
import id from '../style-modules/pricing.module.css'

let Pricing = () => {
    return (
        <div id={id.container}>
            <div className={classes.tittle}>
                <h1>Ціни</h1>
            </div>
            <div className={classes.raw}>
                <div className={classes.markersPurple}>
                    <div className={classes.left}>1 година</div>
                    <div className={classes.right}>400 грн</div>
                </div>
            </div>
            <div className={classes.raw}>
                <div className={classes.markersBlue}>
                    <div className={classes.left}>3 години</div>
                    <div className={classes.right}>1000 грн</div>
                </div>
            </div>
        </div>
    );
}
export default Pricing;