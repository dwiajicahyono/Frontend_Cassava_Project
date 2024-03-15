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
import DataPetani from "./pages/petani/DataPetani";
import EditDataPetani from "./pages/petani/EditDataPetani";
import DataPabrik from "./pages/pabrik/DataPabrik";
import EditDataPabrik from "./pages/pabrik/EditDataPabrik";
import DataLogistik from "./pages/logistik/DataLogistik";
import EditDataLogistik from "./pages/logistik/EditDataLogistik";
import DataLahanPetani from "./pages/petani/DataLahanPetani";
import AddDataLahan from "./pages/petani/AddDataLahan";
import EditDataLahan from "./pages/petani/EditDataLahan";

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
          <Route path="/datapetani" element={<DataPetani />} />
          <Route path="/datapetani/edit/:id" element={<EditDataPetani />} />
          <Route path="/datapabrik" element={<DataPabrik />} />
          <Route path="/datapabrik/edit/:id" element={<EditDataPabrik />} />
          <Route path="/datalogistik" element={<DataLogistik />} />
          <Route path="/datalogistik/edit/:id" element={<EditDataLogistik />} />
          <Route path="/datalahan" element={<DataLahanPetani />} />
          <Route path="/datalahan/add" element={<AddDataLahan />} />
          <Route path="/datalahan/edit/:id" element={<EditDataLahan />} />
          <Route path="/data-logistik" element={<DataLahanPetani />} />
          <Route path="/data-logistik/add" element={<AddDataLahan />} />
          <Route path="/data-logistik/edit/:id" element={<EditDataLahan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
