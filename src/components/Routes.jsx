import { Route, Router } from 'wouter'
import { PlayersProvider } from '../context/PlayersContext'
import { Game, Home, Players } from '../pages'

function Routes () {
  return (
    <Router>
      <PlayersProvider>
        <Route path='/' component={Home} />
        <Route path='/create-players' component={Players} />
        <Route path='/game' component={Game} />
      </PlayersProvider>
    </Router>
  )
}

export default Routes
