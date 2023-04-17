import React from 'react';
import './NotaSection.css'

const NotasSection = (props) => {
    return (
    <section>
        <ul>
            {props.children}
        </ul>
    </section> 
    );
}

export default NotasSection;