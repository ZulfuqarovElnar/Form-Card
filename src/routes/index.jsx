import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main";
import FormAddPage from "../pages/form/form-add-page";
import FormListPage from "../pages/form/form-list-page";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "form/add",
                element: <FormAddPage/>
            },
            {
                path: "form/list",
                element: <FormListPage/>
            }
        ]
    }
]);

export default Routes;