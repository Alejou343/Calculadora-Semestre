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
  const [formValues, setFormValues] = React.useState({});
  const [results, setResults] = React.useState({})

  const newNota = () => {
      setNotas([...notas, {Id: notas.length + 1, Nombre: 'Nombre', Nota: 'Nota', Porcentaje: '%'}])
  }

  const deleteNota = () => {
    if (notas.length > 1) {
      notas.pop()
      setNotas([...notas])
    } 
  }

  function calcularNotaFinal(objeto) {
    const arreglo = Object.entries(objeto)
    const nombreCurso = arreglo.filter(x => x[0].includes('Curso'))[0][1]
    const notas = arreglo.filter(x => x[0].includes('Nota')).map(x => Number(x[1]))
    const porcentajes = arreglo.filter(x => x[0].includes('Porcentaje')).map(x => Number(x[1]))
    const acum = []

    for (let i=0; i<notas.length; i++) {
        acum.push(notas[i] * (porcentajes[i] / 100))
    }

    const notaAcumulada = acum.reduce((a,b) => a+b)
    const porcentajeFaltante = 100 - porcentajes.reduce((a,b) => a+b)
    const notaNecesaria = Number(((3 - notaAcumulada) / (porcentajeFaltante / 100)).toFixed(1))

    return setResults([nombreCurso, notaNecesaria, porcentajeFaltante])
}

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormValues((prevState) => ({
    ...prevState,
    [name] : value
  }));
}

  const handleSubmit = (event) => {
    event.preventDefault()
    setTimeout(() => {
      setOpenModal(!openModal)
      calcularNotaFinal(formValues)
    }, 2000);
  }


  return (
    
    <React.Fragment>
      <Header />

      <form onSubmit = {handleSubmit}>
        <NotasSection
        formValues = {formValues}
        handleSubmit = {handleSubmit}
        handleInputChange = {handleInputChange}
        >

          {notas.map(x => 
          (<NotaItem 
          key = {x.Id}
          id = {x.Id}
          nombre = {x.Nombre}
          nota = {x.Nota}
          porcentaje = {x.Porcentaje}
          notas = {notas}
          newNota = {newNota}
          deleteNota = {deleteNota}
          formValues = {formValues}
          handleSubmit = {handleSubmit}
          handleInputChange = {handleInputChange}
          />))}
          <Calcular 
          openModal = {openModal}
          setOpenModal = {setOpenModal}
          />
        </NotasSection>
        </form>

      {!!openModal && <Modal 
        openModal = {openModal}
        setOpenModal = {setOpenModal}
        results = {results}
      />}

    </React.Fragment>
  );
}

export default App;
