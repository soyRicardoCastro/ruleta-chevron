import React from 'react'
import { usePlayers } from '../context/PlayersContext'

function PlayersHUD ({ playerActive }) {
  const { players } = usePlayers()

  return (
    <aside className='absolute left-5 top-5 z-10 flex my-auto gap-20 flex-col'>
      {players.map((player, index) => (
        <div key={`player-aside-${index}`} className={`transition relative flex items-center gap-2 ${index === playerActive ? 'border-4 border-cyan-500' : ''} rounded-md p-2`}>
          <header className='w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-medium text-gray-200'>
            J{index + 1}
          </header>
          <div className='relative'>
            <span className='absolute text-white uppercase text-xs font-medium -top-4 left-5'>{player.name}</span>
            <div className='text-xl font-medium rounded-xl flex items-center justify-center text-gray-200 bg-cyan-500 w-24 z-20'>{player.puntos}</div>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default PlayersHUD
