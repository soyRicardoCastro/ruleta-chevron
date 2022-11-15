import { useState } from 'react'
import { usePlayers } from '../context/PlayersContext'

const opts = [
  { name: 'QUIEBRA', value: 0, movements: 0 },
  { name: 25, value: 330, movements: 1 },
  { name: 50, value: 300, movements: 2 },
  { name: 75, value: 280, movements: 3 },
  { name: 100, value: 270, movements: 4 },
  { name: 'COMODIN', value: 240, movements: 0 },
  { name: 'PIERDE TURNO', value: 210, movements: 0 },
  { name: 75, value: 190, movements: 3 },
  { name: 25, value: 170, movements: 1 },
  { name: 50, value: 150, movements: 2 },
  { name: 100, value: 130, movements: 4 },
  { name: 'KIEBRA', value: 110, movements: 0 },
  { name: 25, value: 80, movements: 1 },
  { name: 50, value: 66.8, movements: 2 },
  { name: 25, value: 33.6, movements: 1 },
  { name: 'QUIEBRA', value: 22.4, movements: 0 }
]

function getRandomIdx (min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function Ruleta ({ isVisible, playerActive }) {
  const { players, setPlayerTurn, playerTurn } = usePlayers()
  const [rotateDeg, setRotateDeg] = useState(0)
  const [reward, setReward] = useState('')
  const [movements, setMovements] = useState(0)
  const [finish, setFinish] = useState(false)

  if (!isVisible) return null

  function rotate () {
    const idx = getRandomIdx(1, 15)
    const opt = opts[idx]

    setRotateDeg(opt.value)

    setTimeout(() => {
      const reward = opt.name
      const player = players[playerActive]

      setReward(reward)
      setFinish(true)
      if (reward === 'COMODIN') {
        player.puntos = 500
        setMovements('Puedes girar la ruleta de nuevo')
        return
      }
      if (reward === 'KIEBRA') {
        player.puntos = 0
        setMovements('Te quedaste sin puntos... F')
        return
      }
      if (reward === 'PIERDE TURNO') {
        setMovements('Perdiste el turno :(')
        const playersCantity = players.length

        if (playerTurn < playersCantity - 1) {
          setPlayerTurn(playerTurn + 1)
        }
        if (playerTurn === playersCantity - 1) {
          setPlayerTurn(0)
        }
      }
      setMovements(`Haz ganado ${opt.movements} letras`)

      if (typeof reward !== 'string') player.puntos = player.puntos + reward
    }, 5000)

    setFinish(false)
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center flex-col'>
      <div className='w-3 h-14 bg-cyan-500 rounded-b-xl relative -bottom-6 z-50' />
      <img src='/ruleta.png' style={{ transition: '5s all', transform: `rotate(${rotateDeg}deg` }} className='w-[400px] h-[400px] rounded-full' onClick={rotate} alt='' />
      {finish && (
        <>
          <h2 className='text-gray-200 text-5xl my-7 uppercase font-medium'>{reward}</h2>
          <h4 className='text-gray-200 text-3xl my-5 uppercase font-medium'>{movements}</h4>
        </>
      )}
    </div>
  )
}
export default Ruleta
