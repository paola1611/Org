import { useState } from 'react'
import './Form.css'
import Campo from '../CampoTexto/Campo'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Button from '../Button/Button'


const Form = (props) => {
    const [name, setName] = useState("")
    const [job, setJob] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")
    const [tittle, setTittle] = useState("")
    const [color, setcolor] = useState("")

    const { newCollaborator, createTeam } = props

    const managment = (event) => {
        event.preventDefault()
        let data = {
            name: name,
            job: job,
            photo: photo,
            team: team
        }
        newCollaborator(data)
    }

    const managmenNewTeam = (e) => {
        e.preventDefault()
        createTeam({tittle, firstColor: color})
    }


    return <section className='form'>
        <form onSubmit={managment}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo titulo="Nombre" placeholder="Ingresar su nombre" required value={name} setValue={setName}/>
            <Campo titulo="Puesto" placeholder="Ingresar su puesto" required  value={job} setValue={setJob}/>
            <Campo titulo="Foto" placeholder="Ingresar enlace de foto" required  value={photo} setValue={setPhoto}/>
            <ListaOpciones value={team} setTeam={setTeam} teams={props.teams}/>
            <Button texto="Crear"/>
        </form>

        <form onSubmit={managmenNewTeam}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo titulo="Titulo" placeholder="Ingresar titulo" required value={tittle} setValue={setTittle}/>
            <Campo titulo="Color" placeholder="Ingresar el color en hex" required  value={color} setValue={setcolor} type="color"/>
            <Button texto="Registrar"/>
        </form>    
    </section>
}

export default Form