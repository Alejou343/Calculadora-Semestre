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
            <button className="calcular" type='submit'>
                {props.text === 'Calcular' ? 'Calcular' : 
                <div className='loader'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>}
                </button>
        </div>
    );
}

export default Calcular;