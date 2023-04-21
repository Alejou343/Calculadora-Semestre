import React from 'react';
import '../Styles/Calcular.css'

const Calcular = (props) => {

    // const onClickCalcular = (event) => {
    //     event.preventDefault()
    //     setTimeout(() => {
    //         props.setOpenModal(!props.openModal)
    //     }, 3000);
    // }

    return (
        <div className="calculate-button">
            <button className="calcular" type='submit'>Calcular</button>
        </div>
    );
}

export default Calcular;