import {

Routes,

Route,

Navigate

} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";

import RegisterPage from "./pages/RegisterPage/RegisterPage";

import ExpensesPage from "./pages/Expenses/ExpensesPage";

import AnalyticsPage from "./pages/Analytics/AnalyticsPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function AppRoutes(){

return(

<Routes>

<Route

path="/"

element={<Navigate to="/login"/>}

/>

<Route

path="/login"

element={<LoginPage/>}

/>

<Route

path="/register"

element={<RegisterPage/>}

/>

<Route

path="/expenses"

element={<ExpensesPage/>}

/>

<Route

path="/analytics"

element={<AnalyticsPage/>}

/>

<Route

path="*"

element={<NotFoundPage/>}

/>

</Routes>

)

}

export default AppRoutes;
