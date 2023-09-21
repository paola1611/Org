import { useState } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';
import Collaborator from './components/Collaborator/Collaborator';
import { v4 as uuidv4 } from "uuid"

function App() {
  const [showForm, updateForm] = useState(true)
  const [collaborators, updateCollaborators] = useState([{
    id: uuidv4(),
    team: "Front-End",
    photo: "https://github.com/harlandlohora.png",
    name: "Harland Lohora",
    job: "Instructor",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Programación",
    photo: "https://github.com/genesysR-dev.png",
    name: "Genesys Rondón",
    job: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuidv4(),
    team: "UX y Diseño",
    photo: "https://github.com/JeanmarieAluraLatam.png",
    name: "Jeanmarie Quijada",
    job: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuidv4(),
    team: "Programación",
    photo: "https://github.com/christianpva.png",
    name: "Christian Velasco",
    job: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuidv4(),
    team: "Innovación y Gestión",
    photo: "https://github.com/JoseDarioGonzalezCha.png",
    name: "Jose Gonzalez",
    job: "Dev FullStack",
    fav: false
  }])

  const [teams, updateTeams] = useState([
    {
      id: uuidv4(),
      tittle: "Programación",
      firstColor: "#57C278",
      secondColor: "#D9F7E9"
    }, 
    {
      id: uuidv4(),
      tittle: "Front-End",
      firstColor: "#82CFFA",
      secondColor: "#E8F8FF"
    }, 
    {
      id: uuidv4(),
      tittle: "Data Science",
      firstColor: "#A6D157",
      secondColor: "#F0F8E2"
    }, 
    {
      id: uuidv4(),
      tittle: "Devops",
      firstColor: "#E06B69",
      secondColor: "#FDE7E8"
    }, 
    {
      id: uuidv4(),
      tittle: "UX y Diseño",
      firstColor: "#DB6EBF",
      secondColor: "#FAE9F5"
    }, 
    {
      id: uuidv4(),
      tittle: "Móvil",
      firstColor: "#FFBA05",
      secondColor: "#FFF5D9"
    }, 
    {
      id: uuidv4(),
      tittle: "Innovación y Gestión",
      firstColor: "#FF8A29",
      secondColor: "#FFEEDF"
    }
  ])

  const changeForm = () => {
    updateForm(!showForm)
  }

  const newCollaborator = (collaborator) => {
    console.log("nuevo coalborador", collaborator)
    updateCollaborators([...collaborators, collaborator])
 }

 const deleteCollaborator = (id) => {
    console.log("eliminar", id)
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)
    updateCollaborators(newCollaborators)
  }

const updateColor = (color, id) => {
  const teamsUpdated = teams.map((team) => {
    if(team.id === id){
       team.firstColor = color
      }
      return team
  })
  updateTeams(teamsUpdated)
}

const createTeam = (newTeam) => {
  console.log(newTeam)
  updateTeams([...teams, {...newTeam, id: uuidv4()}])
}

const like = (id) => {
  const updatedLikes = collaborators.map((collaborator) => {
    if (collaborator.id === id){
      collaborator.fav = !collaborator.fav
    }
    return collaborator
  })
  updateCollaborators(updatedLikes)
}


  return (
    <div className="App">
      <Header />
      {showForm ? <Form 
      teams = {teams.map((team) => team.tittle)}
      newCollaborator={newCollaborator}
      createTeam={createTeam}/> : <></>
      } 
      <MiOrg changeForm={changeForm}/>
      
      {
        teams.map( (team) => 
        <Team datos={team} key={team.tittle}
        collaborators={collaborators.filter( collaborator => collaborator.team === team.tittle)}
        deleteCollaborator= {deleteCollaborator}
        updateColor={updateColor}
        like={like}
        />)
      }
      <Footer />
    </div>
  );
}

export default App;
