import React from 'react';
import '../Styles/NotaItem.css';


const NotaItem = (props) => {

    
    const iconPlus = (event) => {
        event.preventDefault()
        props.newNota()
    }

    const iconMinus = (event) => {
        event.preventDefault()
        props.deleteNota()
    }

    return (
    <div className="nota">
        <input 
            type="text" 
            name = {`Nombre${props.id}`}
            placeholder = 'Nombre'
        />
        <input 
            type="text" 
            name = {`Nota${props.id}`}
            placeholder = 'Nota' 
            value = {props.formValues.nota}
            onChange = {props.handleInputChange}
        />
        <input 
            type="text" 
            name = {`Porcentaje${props.id}`}
            placeholder = '%'
            value = {props.formValues.porcentaje}
            onChange = {props.handleInputChange}
        />
        <div className="buttons">
            <button>
                    <img 
                    src="https://img.icons8.com/office/1x/plus.png" 
                    alt="New.png" 
                    onClick = {iconPlus}
                    />
                </button>
            <button>
                    <img 
                    src="https://img.icons8.com/office/1x/minus.png" 
                    alt="Erase.png" 
                    onClick = {iconMinus} 
                    />
                </button>
        </div>
    </div>
    );
}

export default NotaItem;