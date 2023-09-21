import { useState } from "react"
import "./Campo.css"
const Campo = (props) => {

   const { placeholder, type = "text" } = props  
   const placeholderModificado = `${placeholder}...`

   const setChange = (e) => {
        props.setValue(e.target.value)
   }
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder={placeholderModificado} required={props.required} value={props.value} onChange={setChange} type={type}></input>
        </div>
}

export default Campo