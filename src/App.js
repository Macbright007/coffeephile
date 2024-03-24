import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetailsPage from "./components/ProductDetailsPage";
import ProductLists from "./components/ProductLists";
import { CoffeeProvider } from "./contexts/CoffeeContext";
import About from "./components/About";
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <CoffeeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductLists />} />
          <Route path="/about" element={<About />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
        </Routes>
        <Footer />
      </CoffeeProvider>
    </div>
  );
}

export default App;
