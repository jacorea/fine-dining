import React from 'react'
import classes from './ModalOverlay.module.css';

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default ModalOverlay
