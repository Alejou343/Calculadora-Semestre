import React from 'react';
import '../Styles/NotaSection.css'

const NotasSection = (props) => {

    return (
    <div>
        <div className= 'name-course'>
            <input 
            type="text" 
            name = 'Curso'
            placeholder= 'Nombre del curso'
            value = {props.formValues.curso}
            onChange = {props.handleInputChange}
            />
        </div>
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    </div>
    );
}

export default NotasSection;