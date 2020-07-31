import React from 'react';
import classes from '../style-modules/main.module.css'
import id from '../style-modules/main.module.css'

let Main = () => {
    return (
        <div id={id.container}>
            <div>
                <h1 className={classes.tittle}>Правнича спілка</h1>
            </div>
            <div className={classes.flex}>
                <div className={classes.col1}>
                    <h2>Юридичні послуги</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus accusantium inventore nostrum sint enim deleniti doloremque cumque, corrupti nemo dicta veniam minima asperiores consequuntur, natus odit molestias eum corporis sed nihil possimus molestiae commodi placeat voluptatum suscipit. Ea error voluptatem modi, obcaecati beatae tempore veritatis eius, dolorem nostrum quisquam illum.</p>
                </div>
                <div className={classes.col2}>
                    <div id={id.rectangle}></div>
                </div>
            </div>
        </div>
    );
}
export default Main;