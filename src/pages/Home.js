import { NUMBER_QUESTIONS } from '../constants/action-type'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1>Bienvenue sur Calcul</h1>

      <p>
        Calcul est un jeu de calcul mental, votre but est de trouver la réponse aux {NUMBER_QUESTIONS} questions. <br />
        Un point par bonne réponse.
      </p>

      <p>
        <Link to='/game' className='btn btn-primary'>Commencer</Link>
      </p>
      <p>
        <Link to='/scoreboard' className='btn btn-primary'>Tableau des scores</Link>
      </p>
    </>
  )
}

export default HomePage
