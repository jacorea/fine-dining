import React from 'react'
import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={classes['cart-items']}>
                <li>cartItems</li>
            </ul>
            <div className={classes.total}>
                <span>total</span>
                <span>$35.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
