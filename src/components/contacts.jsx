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
                <ul>
                    <ul className={classes.markersPurple}>
                        <li className={classes.left}>Адреса:</li>
                        <li>вул. Соборна 43, оф.16, 21050, м. Вінниця</li>
                    </ul>
                    <ul className={classes.markersBlue}>
                        <li className={classes.left}>Телефон:</li>
                        <li>(097)266-83-73</li>
                    </ul>
                    <ul className={classes.markersPurple}>
                        <li className={classes.left}>e-mail:</li>
                        <li>natalithedutch@gmail.com</li>
                    </ul>
                </ul>
            </div>
            <div className={classes.tittle}>
                <h2>Графік роботи</h2>
            </div>
            <div>
                <ul>
                    <ul className={classes.markersPurple}>
                        <li className={classes.left}>Пн-Пт</li>
                        <li>6:00-24:00</li>
                    </ul>
                    <ul className={classes.markersBlue}>
                        <li className={classes.left}>Сб-Нд</li>
                        <li>Вихідні</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
export default Contacts;