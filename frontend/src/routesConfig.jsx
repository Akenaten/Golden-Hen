import App from "../src/App";
import LoginScreen from "./screens/login-screen";
import SignupScreen from "./screens/signup-screen";

export const routesConfig = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login",
                element: <LoginScreen />,
            },
            {
                path: "/sign-up",
                element: <SignupScreen />,
            },
        ],
    },
];
