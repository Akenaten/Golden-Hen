import { Navbar } from "./Navbar";
import "./index.css";
import AccountPanelScreen from "./screens/account-panel";
import { HomeScreen } from "./screens/home-screen";
import LoginScreen from "./screens/login-screen";
import SignupScreen from "./screens/signup-screen";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    );
}

export default App;
