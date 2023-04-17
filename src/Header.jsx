import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Calcular cuanto te falta para aprobar</h1>
            <input type="text" placeholder='Nombre del curso'/>
        </div>
    );
}

export default Header;