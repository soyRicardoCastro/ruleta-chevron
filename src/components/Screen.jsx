import React from 'react'

const Spacer = () => (
  <div className='w-10 h-12 rounded-md' />
)

function Screen ({
  guessedLetters,
  wordToGuess,
  reveal = false
}) {
  return (
    <div className='relative p-4 my-20 flex gap-1 items-center justify-center flex-wrap tv'>
      <Spacer />
      {wordToGuess.split(' ').map((letter, index) => {
        return (
          <React.Fragment key={index}>
            <div className='flex gap-2'>
              {letter.split('').map((letter, index) => (
                <div className='w-10 h-12 flex items-center justify-center text-gray-300 text-3xl font-bold border-[2px] border-gray-300 rounded-md uppercase' key={index}>
                  <span className={`transition ${guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'}`}>{letter}</span>
                </div>
              ))}
            </div>
            <Spacer />
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Screen
