
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import Modal from 'react-modal'

function App() {
  Modal.setAppElement('#root');
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
