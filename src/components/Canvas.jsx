import { useRef } from 'react'

function Canvas () {
  const canvasRef = useRef(null)
  const canvas = canvasRef.current
  canvas.getContext('2d')

  return (
    <canvas />
  )
}

export default Canvas
