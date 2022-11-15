import { Link } from 'wouter'

function Home () {
  return (
    <div className='bg-gradient-to-r from-slate-800 to-gray-900 w-full h-screen flex justify-center items-center flex-col gap-11'>
      <h2 className='relative flex gap-[5px] text-white cursor-pointer text-[4em] font-mono'>
        <span className='relative blur-sm px-[5px] hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          R
        </span>
        <span className='relative blur-sm px-[5px] py-0 hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          U
        </span>
        <span className='relative blur-sm px-[5px] py-0 hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          L
        </span>
        <span className='relative blur-sm px-[5px] py-0 hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          E
        </span>
        <span className='relative blur-sm px-[5px] py-0 hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          T
        </span>
        <span className='relative blur-sm px-[5px] py-0 hover:blur-0 transition ease-in'>
          <i className='absolute bg-transparent [inset:0]' />
          A
        </span>
      </h2>

      <Link to='/create-players' className='relative bg-gray-400 uppercase text-3xl [letter-spacing:0.1em] cursor-pointer font-normal py-[10px] px-[30px] [transition:0.5s] hover:[letter-spacing:0.25em] hover:bg-cyan-500 text-white btn'><span>Empezar</span><i /></Link>
    </div>
  )
}

export default Home
