import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import Game from './pages/Game'
import Scoreboard from './pages/Scoreboard'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link to='/' className='navbar-brand'>Calcul</Link>

        <button className='navbar-toggler' type='button'>
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/game' className='nav-link'>Game</Link>
            <Link to='/scoreboard' className='nav-link'>Scoreboard</Link>
          </div>
        </div>
      </nav>

      <main className='container mt-2'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/game'>
            <Game />
          </Route>
          <Route path='/scoreboard'>
            <Scoreboard />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default App
