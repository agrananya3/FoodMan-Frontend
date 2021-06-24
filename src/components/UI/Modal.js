import './Modal.css'
import {Fragment} from 'react'
import ReactDOM from 'react-dom'

const Overley =props =>{
    return (
        <div className='modal'>
            <div className='content'>{props.children}</div>
        </div>
    )
}
const Backdrop =props=>{
    return <div className='backdrop' onClick={props.onClick}></div>
}


const Modal = props=>{
    return(
        <Fragment>
           {ReactDOM.createPortal( <Backdrop onClick={props.onClick}/>,document.getElementById('overley'))}
           {ReactDOM.createPortal( <Overley>{props.children}</Overley>,document.getElementById('overley'))}
            
        </Fragment>
    )

}
export default Modal;