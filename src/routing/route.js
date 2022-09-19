import AddSupplier from "../pages/AddSupplier";
import Home from "../pages/Home";
import SupplierDetail from "../pages/SupplierDetail";
import SupplierList from "../pages/SupplierList";

const routes = [
    {
        path:"/",
        component:<Home/>
    },
    {
        path:"/home",
        component:<Home/>
    },
    {
        path:"/list",
        component:<SupplierList/>
    },
    {
        path:"/add",
        component:<AddSupplier/>
    },
    {
        path:"/detail",
        component:<SupplierDetail/>
    },
];

export default routes;