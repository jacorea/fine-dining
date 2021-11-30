import React from 'react'
import ReactDOM from 'react-dom'

//components
import Backdrop from '../Backdrop/Backdrop'
import ModalOverlay from '../ModalOverlay/ModalOverlay'

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>
    )
}

export default Modal
