// bring in all the imports
import { Outlet } from 'react-router-dom';
// import './App.css'
import Header from './components/handa';
import Footer from './components/fanta';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {


  return (


    <div className="App">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}

export default App
