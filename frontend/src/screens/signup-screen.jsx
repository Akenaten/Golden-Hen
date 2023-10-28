import FormScreen from "./form-screen";

export default function SignupScreen() {
    const fields = ["Username", "Password", "Verify password", "Email"];
    const signupPostURL = "someURLForLoginScreen";
    return <FormScreen fields={fields} postURL={signupPostURL} />;
}
