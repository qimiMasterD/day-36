import Header from "./components/Header";
import AdminSidebar from "./components/Header";
import AdminFooter from "./components/AdminFooter";

/*
Áp dụng cho các pages: Dashboard (/admin), Users (/admin/users), Settings (/admin/settings)
*/

function AdminLayout() {
    return (
        <>
            <Header></Header>
            <AdminSidebar></AdminSidebar>
            <AdminFooter></AdminFooter>
        </>
    );
}

export default AdminLayout;
