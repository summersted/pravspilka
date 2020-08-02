import React from 'react';
import classes from '../style-modules/contact.module.css'
import id from '../style-modules/contact.module.css'

let Contacts = () => {
    return (
        <div id={id.container}>
            <div className={classes.tittle}>
                <h1>Як зі мною зв'язатись?</h1>
            </div>
            <div>
                <div className={classes.raw}>
                    <div className={classes.markersPurple}>
                        <div className={classes.left}>Адреса:</div>
                        <div>вул. Соборна 43, оф.16, 21050, м. Вінниця</div>
                    </div>
                </div>
                <div className={classes.raw}>
                    <div className={classes.markersBlue}>
                        <div className={classes.left}>Телефон:</div>
                        <div>(097)266-83-73</div>
                    </div>
                </div>
                <div className={classes.raw}>
                    <div className={classes.markersPurple}>
                        <div className={classes.left}>e-mail:</div>
                        <div>natalithedutch@gmail.com</div>
                    </div>
                </div>
            </div>
            <div className={classes.tittle}>
                <h2>Графік роботи</h2>
            </div>
            <div>
                <div className={classes.raw}>
                    <div className={classes.markersPurple}>
                        <div className={classes.left}>Пн-Пт</div>
                        <div className={classes.right}>6:00-24:00</div>
                    </div>
                </div>
                <div className={classes.raw}>
                    <div className={classes.markersBlue}>
                        <div className={classes.left}>Сб-Нд</div>
                        <div className={classes.right}>Вихідні</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Contacts;