import "./Team.css"
import Collaborator from "../Collaborator/Collaborator"
import hexToRgba from "hex-to-rgba"

const Team = (props) => {
    const { firstColor, secondColor, tittle, id} = props.datos
    const { collaborators, deleteCollaborator, updateColor, like } = props
    const colors = { backgroundColor: hexToRgba(firstColor, 0.6)}

    return <> { collaborators.length > 0 &&
        <section className="team" style={colors}>
            <input type="color" className="input-color" value={firstColor} 
            onChange={(e) => {
                updateColor(e.target.value, id)
            }}>

            </input>
            
            <h3 style={{ borderColor: firstColor}}>{tittle}</h3>
            <div className="collaborators">
                {
                    collaborators.map((collaborator, index) => <Collaborator 
                    data={collaborator} 
                    key={index} 
                    firstColor={firstColor} 
                    deleteCollaborator={deleteCollaborator}
                    like={like}
                    />)
                }
            </div>
        
        </section>
    }</>
}

export default Team