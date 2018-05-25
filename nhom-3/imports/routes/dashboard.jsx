import DashboardPage from "../views/Dashboard/dashboard.jsx";
import Dictionary from "../views/Dictionary/dict";
import {
    Dashboard,
    ContentPaste}
  from "@material-ui/icons";

const dashboardRoutes = [
    {
        path: "/dashboard",
        sidebarName: "a",//: "Dashboard",
        navbarName: "Dashboard",
        icon: Dashboard,
        component: DashboardPage //DashboardPage
    },
    {
        path: "/dictionary",
        sidebarName: "a",//: "Table List",
        navbarName: "Dictionary",
        icon: ContentPaste,
        component: Dictionary //TableList
    },
    {
      redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
