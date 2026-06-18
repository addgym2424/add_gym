import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Maintenance from "./Maintainance";

function App() {
  if (import.meta.env.VITE_MAINTENANCE_MODE === "true") {
    return <Maintenance />;
  }
  return (
    <>
      <BrowserRouter> 
      <Routes> 

        <Route path ="/" element={<Home />} />
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
