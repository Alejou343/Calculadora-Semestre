import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = (props) => {

    const onClickAceptar = () => {
        props.setOpenModal(!props.openModal)
        window.location.reload()
    }

    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="modal inactive">
                <p>Necesitas un <b>4.5</b> en el último <b>15%</b> para aprobar <b>Química General</b></p>
                <button className='calcular' onClick = {onClickAceptar}>Aceptar</button>
            </div>
        </div>, document.getElementById('modal')
    );
}

export default Modal;