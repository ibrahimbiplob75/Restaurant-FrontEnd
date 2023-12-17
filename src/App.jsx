
import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Shared/Header'
import Footer from './Components/Shared/Footer'

function App() {
  const location=useLocation();
  console.log(location);
  const removeHF = location.pathname.includes("signup") || location.pathname.includes("login");

  return (
    <>
      <div>
        {removeHF || <Header></Header>}
        <Outlet></Outlet>
        {removeHF || <Footer></Footer>}
      </div>
    </>
  );
}

export default App
