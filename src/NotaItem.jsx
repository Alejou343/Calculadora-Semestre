import React from 'react';
import './NotaItem.css'

const NotaItem = (props) => {

    return (
        <div className="nota">
            <input type="text" placeholder = {props.nombre}/>
            <input type="text" placeholder = {props.nota} />
            <input type="text" placeholder = {props.porcentaje} />
            <div className="buttons">
                <button>
                        <img 
                        src="https://img.icons8.com/office/1x/plus.png" 
                        alt="New.png" 
                        onClick = {props.newNota}/>
                    </button>
                <button>
                        <img 
                        src="https://img.icons8.com/office/1x/minus.png" 
                        alt="Erase.png" 
                        onClick = {props.deleteNota} />
                    </button>
            </div>
        </div>
    );
}

export default NotaItem;