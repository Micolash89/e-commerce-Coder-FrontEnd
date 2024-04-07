import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./components/Login";
import Dashboard from "./components/Current";
import Register from "./components/Register";
import RegisterProduct from "./components/RegisterProduct";
import Cart from "./components/Cart";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/current" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registerproduct" element={<RegisterProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/details/:id" element={<Product />} />

        <Route path="/*" element={<Main />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;