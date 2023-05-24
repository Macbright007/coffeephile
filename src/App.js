import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ProductLists from "./components/ProductLists";
import { CoffeeProvider } from "./contexts/CoffeeContext";

function App() {
  return (
    <div className="App">
      <CoffeeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductLists />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
      </CoffeeProvider>
    </div>
  );
}

export default App;
