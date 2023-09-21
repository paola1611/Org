import { useState } from 'react'
import './MiOrg.css'
const MiOrg = (props) => {

    const [show, updateShow] = useState(true)

    return <section className="org-section">
        <h3 className="tittle">Mi organizacion</h3>
        <img src="\img\add.png" onClick={props.changeForm}></img>
    </section>
}

export default MiOrg