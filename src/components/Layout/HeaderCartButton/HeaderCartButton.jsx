import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import CartIcon from '../CartIcon/CartIcon';

//styles
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((currentSum, item) => {
        return currentSum + item.amount;
    }, 0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />    
            </span> 
            <span>Your Cart</span> 
            <span className={classes.badge}>{numberOfCartItems}</span> 
        </button>
    )
}

export default HeaderCartButton;
