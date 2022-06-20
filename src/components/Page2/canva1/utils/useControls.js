import { useEffect, useRef } from 'react'

export function useKeyPress(target, event) {
  useEffect(() => {
    const downHandler = ({ key }) => target.indexOf(key) !== -1 && event(true)
    const upHandler = ({ key }) => target.indexOf(key) !== -1 && event(false)
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [event, target])
}

export function useControls() {
  const keys = useRef({ forward: false, backward: false, left: false, right: false, brake: false, reset: false })
  useKeyPress(['ArrowUp', '5'], (pressed) => (keys.current.forward = pressed))
  useKeyPress(['ArrowDown', '0'], (pressed) => (keys.current.backward = pressed))
  useKeyPress(['ArrowLeft', '1'], (pressed) => (keys.current.left = pressed))
  useKeyPress(['ArrowRight', '3'], (pressed) => (keys.current.right = pressed))
  useKeyPress(['w'], (pressed) => (keys.current.brake = pressed))
  useKeyPress(['r'], (pressed) => (keys.current.reset = pressed))
  return keys
}
