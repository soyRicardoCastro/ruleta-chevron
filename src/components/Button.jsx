
function Button ({ onClick }) {
  return (
    <button onClick={onClick} className='absolute right-20 z-30 w-40 h-40 rounded-full border-4 border-gray-800 text-white text-2xl uppercase font-black [letter-spacing:0.1em] hover:[letter-spacing:0.25em] transition hover:scale-105 btn-shadow'>
      Girar
    </button>
  )
}

export default Button
