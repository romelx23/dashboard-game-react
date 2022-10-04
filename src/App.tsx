import { useState } from 'react'
import './App.css'
import { UiProvider } from './context'
import { HomePage } from './pages'

function App() {
  return (
    <div className="App">
      <UiProvider>
        <HomePage />
      </UiProvider>
    </div>
  )
}

export default App
