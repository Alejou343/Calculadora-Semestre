import React from 'react'
import './App.css';
import Header from './Header';
import NotaItem from './NotaItem';
import NotasSection from './NotasSection';
import Calcular from './Calcular';
import Modal from './Modal';

const defaultNotas = [
  {Id: 1, Nombre: 'Nombre', Nota: 'Nota', Porcentaje: '%'}
]

function App() {

  const [notas, setNotas] = React.useState(defaultNotas);
  const [openModal, setOpenModal] = React.useState(false);

    const newNota = () => {
      setNotas([...notas, {Id: notas.length + 1, Nombre: 'Nombre', Nota: 'Nota', Porcentaje: '%'}])
  }

  const deleteNota = () => {
    if (notas.length > 1) {
      notas.pop()
      setNotas([...notas])
    } 
  }

  return (
    <React.Fragment>
      <Header />

      <NotasSection>
        {notas.map(x => 
        (<NotaItem 
        key = {x.Id}
        nombre = {x.Nombre}
        nota = {x.Nota}
        porcentaje = {x.Porcentaje}
        newNota = {newNota}
        deleteNota = {deleteNota}
        />))}
      </NotasSection>

      {!!openModal && <Modal 
        openModal = {openModal}
        setOpenModal = {setOpenModal}
      />}

      <Calcular 
        openModal = {openModal}
        setOpenModal = {setOpenModal}
        />
    </React.Fragment>
  );
}

export default App;
