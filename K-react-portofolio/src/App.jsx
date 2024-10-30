// bring in all the imports
import { Outlet } from 'react-router-dom';
// import './App.css'
import Header from './components/header'

function App() {
  

  return (
  
    
    <div>
      <Header />
      <Outlet />
    </div>
  
  )
}

export default App
