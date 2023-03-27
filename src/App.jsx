import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import Login from './Pages/Login'
import Details from "./Pages/Details";
import Redirect from "./Components/Redirect";
import Headers from "./Components/Headers";
import Products from "./Components/Products";
function App() {

  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App
