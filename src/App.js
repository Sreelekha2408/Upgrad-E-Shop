import "./App.css";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import AuthenticationComponent from "./AuthenticationComponent";
import AddProduct from "./components/products/AddProduct";
import ProductDetail from "./components/products/ProductDetails";
import OrderPage from "./components/order/Order";
import Dashboard from "./components/dashboard/Dashboard";
import { NavigationProvider } from "./common/history";

function App() {
  return (
    <HashRouter>
      <NavigationProvider>
        <Routes>
          <Route path="/signUp" exact Component={SignUp} />
          <Route path="/login" exact Component={Login} />
          <Route element={<AuthenticationComponent />}>
            <Route path="/" exact Component={Dashboard} />
            <Route path="/addProduct" exact Component={AddProduct} />
            <Route path="/productDetail" exact Component={ProductDetail} />
            <Route path="/orderProduct" exact Component={OrderPage} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </NavigationProvider>
    </HashRouter>
  );
}

export default App;
