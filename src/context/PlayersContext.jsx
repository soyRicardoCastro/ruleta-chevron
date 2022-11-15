import { createContext, useContext, useState } from 'react'

const PlayersContext = createContext()

export const usePlayers = () => useContext(PlayersContext)

export function PlayersProvider ({ children }) {
  const [players, setPlayers] = useState(JSON.parse(window.localStorage.getItem('players')) || [])
  const [playerTurn, setPlayerTurn] = useState(0)

  const createPlayers = (arr) => {
    setPlayers(arr)
    window.localStorage.setItem('players', JSON.stringify(arr))
  }

  return (
    <PlayersContext.Provider
      value={{
        players,
        setPlayers,
        createPlayers,
        playerTurn,
        setPlayerTurn
      }}
    >
      {children}
    </PlayersContext.Provider>
  )
}
