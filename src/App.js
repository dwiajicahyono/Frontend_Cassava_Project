import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddOrder from "./pages/AddOrder";
import EditProduct from "./pages/EditProduct";
import TerimaOrder from "./pages/TerimaOrder";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddOrder />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/products/acc/:id" element={<TerimaOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
