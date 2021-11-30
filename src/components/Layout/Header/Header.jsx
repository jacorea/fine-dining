import React, {Fragment} from 'react'
import meals from  '../../.././assets/meals.jpg'

//components
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';


//styling
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals2Go</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="dinning table full of dinner items" />
            </div>
        </Fragment>
    )
}

export default Header;
