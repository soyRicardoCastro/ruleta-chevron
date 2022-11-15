import axios from 'axios'
import { useEffect, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useLocation } from 'wouter'
import { Layout } from '../components'
import { usePlayers } from '../context/PlayersContext'

function Players () {
  const { createPlayers } = usePlayers()
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')
  const [player3, setPlayer3] = useState('')
  const [player4, setPlayer4] = useState('')
  const [enable, setEnable] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [location, navigate] = useLocation()

  if (window.localStorage.getItem('players')) return navigate('/game')

  useEffect(() => {
    if (player1 !== '' && player2 !== '') setEnable(true)
    else setEnable(false)
  }, [player1, player2])

  const handleClick = async (e) => {
    try {
      e.preventDefault()

      const players = [
        {
          name: player1
        },
        {
          name: player2
        }
      ]

      if (player3 !== '') {
        players.push({
          name: player3
        })
      }
      if (player4 !== '') {
        players.push({
          name: player4
        })
      }

      toast.promise(
        async () => {
          const { data } = await axios.post('https://ruleta-api-production.up.railway.app/api/players', players)
          createPlayers(data)
          navigate('/game')
        }, {
          success: 'Jugadores Creados',
          error: 'Ha ocurrido un error',
          pending: 'Enviando Informacion'
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Layout>
      <form className='flex flex-col relative items-center justify-center gap-8'>
        <div className='relative w-64'>
          <input
            className='w-full p-3 border border-[rgba(255,255,255,0.25)] bg-slate-800 rounded-md outline-none text-white text-base input-player'
            autoFocus
            type='text'
            required
            onChange={(e) => setPlayer1(e.target.value)}
            name='player1'
            value={player1}
          />
          <span className='absolute left-0 p-3 pointer-events-none text-base text-[rgba(255,255,255,0.25)] uppercase span-player font-medium'>Jugador 1</span>
        </div>
        <div className='relative w-64'>
          <input className='w-full p-3 border border-[rgba(255,255,255,0.25)] bg-slate-800 rounded-md outline-none text-white text-base input-player' type='text' onChange={(e) => setPlayer2(e.target.value)} value={player2} required name='player2' />
          <span className='absolute left-0 p-3 pointer-events-none text-base text-[rgba(255,255,255,0.25)] uppercase span-player font-medium'>Jugador 2</span>
        </div>
        <div className='relative w-64'>
          <input className='w-full p-3 border border-[rgba(255,255,255,0.25)] bg-slate-800 rounded-md outline-none text-white text-base input-player' type='text' onChange={(e) => setPlayer3(e.target.value)} value={player3} required name='player3' />
          <span className='absolute left-0 p-3 pointer-events-none text-base text-[rgba(255,255,255,0.25)] uppercase span-player font-medium'>Jugador 3</span>
        </div>
        <div className='relative w-64'>
          <input className='w-full p-3 border border-[rgba(255,255,255,0.25)] bg-slate-800 rounded-md outline-none text-white text-base input-player' type='text' onChange={(e) => setPlayer4(e.target.value)} value={player4} required name='player4' />
          <span className='absolute left-0 p-3 pointer-events-none text-base text-[rgba(255,255,255,0.25)] uppercase span-player font-medium'>Jugador 4</span>
        </div>

        {enable
          ? (
            <button onClick={handleClick} type='submit' className='relative bg-gray-400 uppercase text-3xl [letter-spacing:0.1em] cursor-pointer font-normal py-[10px] px-[30px] [transition:0.5s] hover:[letter-spacing:0.25em] hover:bg-cyan-500 text-white btn'><span><BsFillPlayFill /></span></button>
            )
          : (
            <>
              <p className='text-yellow-500 text-sm font-medium'>Debes crear al menos el Jugador 1 y el Jugador 2</p>
              <button disabled onFocus={() => toast.warn('a')} className='relative bg-gray-400 uppercase text-3xl [letter-spacing:0.1em] cursor-pointer font-normal py-[10px] px-[30px] [transition:0.5s] text-gray-400 btn  disabled:hover:shadow-none disabled:hover:cursor-not-allowed disabled:hover:'><span><BsFillPlayFill /></span></button>
            </>
            )}
      </form>
    </Layout>
  )
}

export default Players
