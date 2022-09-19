import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SupplierList from "./pages/SupplierList";
import AddSupplier from "./pages/AddSupplier";
import SupplierDetail from "./pages/SupplierDetail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddSupplier />} />
            <Route path="/list" element={<SupplierList />} />
            <Route path="/detail" element={<SupplierDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
