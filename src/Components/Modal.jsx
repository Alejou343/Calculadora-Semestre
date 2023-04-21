import ReactDOM from 'react-dom';
import '../Styles/Modal.css';

const Modal = (props) => {

    const onClickAceptar = () => {
        props.setOpenModal(!props.openModal)
    }

    const mensajes = [
        '¡Felicitaciones!, ya aprobaste el curso 🥳', 
        'Ya no puedes aprobar el curso, ánimo a la proxima 😭', 
        `Necesitas un <b>${!!props.results[1] ? props.results[1] : ''} </b> en el último <b>${!!props.results[2] ? props.results[2] : ''}% </b> para aprobar <b>${!!props.results[0] ? props.results[0] : ''}</b> 💪`,
        `<b> Faltan campos por rellenar </b>`    
    ]

    /* eslint-disable */

    if (!props.results[1]) {
        var alerta = mensajes[3]
    } else if (props.results[1] <0) {
        var alerta = mensajes[0]
    } else if (props.results[1] > 5){
        var alerta = mensajes[1]
    } else {
        var alerta = mensajes[2]
    }

    /* eslint-enable */

    return ReactDOM.createPortal(
        <div className="modal-background">
            <div className="modal inactive">
                <p className = 'modal-alert' dangerouslySetInnerHTML = {{__html: alerta}} />
                <button className='calcular' onClick = {onClickAceptar}>Aceptar</button>
            </div>
        </div>, document.getElementById('modal')
    );
}

export default Modal;