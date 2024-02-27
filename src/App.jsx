import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './components/Navbar';

export const App = () => {

  return (
    <>
    <h1>Hola</h1>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/pepito" element={<CharacterListContainer/>}/>
    <Route path="/cart" element={<Cart/>}/>
    </Routes>
    {/* </Footer> */}
      </BrowserRouter>
    </>
  );
};

export default App;


