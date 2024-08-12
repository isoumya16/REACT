import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home-page";
import Productpage from "./pages/product-page";

function App() {
  let formPageTitle = {"product":"product"};
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/products" element={<Productpage pageData={formPageTitle} />} />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
