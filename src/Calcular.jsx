import React from 'react';
import './Calcular.css'

const Calcular = (props) => {

    const onClickCalcular = () => {
        props.setOpenModal(!props.openModal)
    }

    return (
        <div className="calculate-button">
            <button className="calcular" onClick={onClickCalcular}>Calcular</button>
        </div>
    );
}

export default Calcular;