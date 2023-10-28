import FormScreen from "./form-screen";

export default function LoginScreen() {
    const fields = ["Username", "Password"];
    const loginPostURL = "someURLForLoginScreen";
    return <FormScreen fields={fields} postURL={loginPostURL} />;
}
