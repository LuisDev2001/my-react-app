import { useState, useRef, useEffect } from 'react'
import './App.css'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'e-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,HTMLElement>
      'e-input': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,HTMLElement>
    }
  }
}

function App() {
  const eButtonRef = useRef<HTMLButtonElement>(null)
  const eInputRef = useRef<HTMLInputElement>(null)
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const handleMyEvent = () => {
      setCount((count) => count + 1)
    }

    const currentButton = eButtonRef.current
    currentButton?.addEventListener('click', handleMyEvent)

    return () => {
      currentButton?.removeEventListener('click', handleMyEvent)
    }
  }, [])

  useEffect(() => {
    const currentInput = eInputRef.current

    currentInput?.addEventListener('update:modelValue', (event: any) => {
      console.log(event.detail)
      setInputValue(event.detail[0])
    })

    return () => {
      currentInput?.removeEventListener('click', () => {})
    }
  }, [])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="p-4">
        <e-button ref={eButtonRef}>
          Hola mundo { count }
        </e-button>

        <e-input ref={eInputRef} placeholder="Some"></e-input>
        { inputValue }
      </div>
    </>
  )
}

export default App
