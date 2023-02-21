import React, { useState } from 'react'
import { withLayout } from './Layout/Layout'
import { AppRouter } from './Providers/router'
import './index.css'
import Modal from './shared/UI/Modal/Modal'

function App (): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (

      <div className="App">
          <div className="page">
              <Modal isOpen={isOpen} onClose={() => { setIsOpen(false) }}>lsdfsfdasda</Modal>
              <button onClick={() => { setIsOpen(true) }}>Toggle</button>
              <AppRouter/>

          </div>
      </div>
  )
}

export default withLayout(App)
