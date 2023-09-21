import "./Collaborator.css"
import { AiFillCloseSquare, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {

    const {job, name, photo, team, id, fav } = props.data
    const { firstColor, deleteCollaborator, like } = props
    return <div className="collaborator">
        <AiFillCloseSquare className="delete" onClick={() => deleteCollaborator(id)}/>
        <div className="header-card" style={{ backgroundColor: firstColor}}>
            <img src={photo} alt="imagen de perfil"></img>
            <div className="info">
                <h4>{name}</h4>
                <h5>{job}</h5>
                {fav ?  <AiFillHeart color="red" onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
               
                
            </div>
        </div>
    </div>
}

export default Collaborator