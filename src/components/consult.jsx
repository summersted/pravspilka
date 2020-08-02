import React from 'react';
import classes from '../style-modules/consult.module.css'
import id from '../style-modules/consult.module.css'

let Consult = () => {
    return (
        <div id={id.container}>
            <div className={classes.tittle}>
                <h1>Констультую такі справи як:</h1>
            </div>
            <div className={classes.colBlock}>
                <div className={classes.col1}>
                    <div className={classes.col}>
                        <div className={classes.markersPurple}>Сімейні спори</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersBlue}>Поділ майна подружжя</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersPurple}>Виділ частки майна в натурі</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersBlue}>Встановлення порядку користуванням майном</div>
                    </div>
                </div>
                <div className={classes.col2}>
                    <div className={classes.col}>
                        <div className={classes.markersPurple}>Житлові спори</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersBlue}>Спадкові справи</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersPurple}>Визнання права власності</div>
                    </div>
                    <div className={classes.col}>
                        <div className={classes.markersBlue}>Спори з банківськими установами</div>
                    </div>
                </div>
            </div>

            <div id={id.footer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iure voluptas aliquid amet deleniti unde esse ullam a accusantium beatae ab pariatur voluptates maiores, ipsum nostrum laborum vero ea odit.</p>
            </div>
        </div>

    );
}
export default Consult;