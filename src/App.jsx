// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { CssBaseline } from '@mui/material'
import Todolist from './Todolist'
import Navbar from './Navbar'


 
function App() {

  return (
    <>
      <CssBaseline/>
      <Navbar/>
     
      <Todolist/>
     
    </>
  )
}

export default App
