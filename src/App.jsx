import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Dashboard from "./components/current/Current";
import Register from "./components/registerUser/Register";
import RegisterProduct from "./components/product/RegisterProduct";
import Cart from "./components/cart/Cart";
import Product from "./components/product/Product";
import PreLoading from "./components/preLoader/PreLoading";
import MyProducts from "./components/product/MyProducts";
import ModificarProducts from "./components/modifyProduct/ModificarProducts";
import Page404 from "./components/page404/Page404";
import Section2 from "./components/home/Section2";
import { ThemeProvider } from "./components/context/ThemeContext";
import ForgetPassword from "./components/forgetPasswod/ForgetPassword";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Main from "./components/main/Main";
import "./css/breakpoints.css";
import PathLocation from "./components/PathLocation/PathLocation";
import SearchResult from "./components/searchResult/SearchResult";
import Notification from "./components/notification/Notification";
import EditProfile from "./components/editProfile/EditProfile";
import Ticket from "./components/ticket/Ticket";
import TicketDetail from "./components/ticket/TicketDetail";
import ButtonUp from "./components/buttonUP/ButtonUp";

function App() {
  return (
    <>
      <ThemeProvider>
        <PreLoading />
        <Header />
        <Main>
          <PathLocation>
            <Routes>
              <Route path="/" element={<Section2 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/current" element={<Dashboard />} />
              <Route path="/register" element={<Register />} />
              <Route path="/registerproduct" element={<RegisterProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route exact path="/details/:id" element={<Product />} />
              <Route exact path="/myproducts" element={<MyProducts />} />
              <Route exact path="/modify/:id" element={<ModificarProducts />} />
              <Route exact path="/search/:query" element={<SearchResult />} />
              <Route exact path="/profile" element={<EditProfile />} />
              <Route exact path="/tickets" element={<Ticket />} />
              <Route
                exact
                path="/tickets/details/:tid"
                element={<TicketDetail />}
              />
              {/* <Route exact path="/search/?query" element={<ModificarProducts />} /> */}
              <Route
                exact
                path="/restorepassword"
                element={<ForgetPassword />}
              />
              <Route
                exact
                path="/restorepassword/:token"
                element={<ResetPassword />}
              />

              <Route path="/*" element={<Page404 />} />
            </Routes>
          </PathLocation>
          <ButtonUp />
        </Main>
        <Notification />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
