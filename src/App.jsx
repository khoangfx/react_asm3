import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage";
import Layout from "./Component/Layout";
import ShopPage from "./Component/ShopPage";
import CartPage from "./Component/CartPage";
import LoginPage from "./Component/LoginPage";
import DetailPage from "./Component/DetailPage";
import { useSelector } from "react-redux";
import { stateIDShopPage } from "./Component/redux/selectors";
import RegisterPage from "./Component/RegisterPage";
import CheckoutPage from "./Component/CheckoutPage";
import { react } from "fontawesome";

function App() {
  const IDProduct = useSelector(stateIDShopPage);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Shop" element={<ShopPage />} />
          <Route path="Cart" element={<CartPage />} />
          <Route path="Detail" element={<DetailPage id={IDProduct} />} />
          <Route path="Checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
