import "./App.css";
import Navbar from "./components/Navbar";
// import StickyNavbar from './components/StickyNavbar'
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ContactForm from "./pages/Contactus";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import Food from "./pages/Food";
import FoodCopy from "./pages/FoodCopy";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster position="top-right" />
      <Navbar />
      {/* <StickyNavbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/food" element={<Food />} /> */}
        <Route path="/food" element={<FoodCopy />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contactus" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
