import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    const setChange = (e) => {
        console.log("change", e.target.value)
        props.setTeam(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.value} onChange={setChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo...</option>
            { props.teams.map((team, index) => <option key={index}>{team}</option>) }
        </select>
    </div>
}

export default ListaOpciones