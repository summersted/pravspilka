import React from 'react';
import classes from '../style-modules/consult.module.css'
import id from '../style-modules/consult.module.css'

let Consult = () => {
    return (
        <div id={id.container}>
            <div className={classes.tittle}>
                <h1>Констультую такі справи як:</h1>
            </div>
            <div className={classes.flex}>
                <div className={classes.col1}>
                    <ul>
                        <li className={classes.markersPurple}>Сімейні спори</li>
                        <ul>
                            <li className={classes.markersBlue}>Поділ майна подружжя</li>
                            <ul>
                                <li className={classes.markersPurple}>Виділ частки майна в натурі</li>
                                <ul>
                                    <li className={classes.markersBlue}>Встановлення порядку користуванням майном</li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                </div>
                <div className={classes.col2}>
                    <ul>
                        <li className={classes.markersPurple}>Житлові спори</li>
                        <ul>
                            <li className={classes.markersBlue}>Спадкові справи</li>
                            <ul>
                                <li className={classes.markersPurple}>Визнання права власності</li>
                                <ul>
                                    <li className={classes.markersBlue}>Спори з банківськими установами</li>
                                </ul>
                            </ul>
                        </ul>
                    </ul>
                </div>
            </div>

            <div id={id.footer}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iure voluptas aliquid amet deleniti unde esse ullam a accusantium beatae ab pariatur voluptates maiores, ipsum nostrum laborum vero ea odit.</p>
            </div>
        </div>

    );
}
export default Consult;