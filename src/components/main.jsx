import React from 'react';
import classes from '../style-modules/main.module.css'
import id from '../style-modules/main.module.css'
import Photo from '../images/photo.png'


let Main = () => {
    return (
        <div id={id.container} className={classes.grid}>
            <div id={id.tittle}>
                <h1 className={classes.tittle}>Правнича спілка</h1>
            </div>
            <div id={id.textBlock}>
                <h3>Юридичні послуги</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus accusantium inventore nostrum sint enim deleniti doloremque cumque, corrupti nemo dicta veniam minima asperiores consequuntur, natus odit molestias eum corporis sed nihil possimus molestiae commodi placeat voluptatum suscipit. Ea error voluptatem modi, obcaecati beatae tempore veritatis eius, dolorem nostrum quisquam illum.</p>
            </div>
            <div id={id.photo}>
                <img id={id.rectangle} src={Photo} alt="Natali Sydorchuk" />
            </div>
        </div>
    );
}
export default Main;