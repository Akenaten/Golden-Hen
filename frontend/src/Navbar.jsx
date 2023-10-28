import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="p-4 items-center text-3xl absolute font-joti h-16 bg-black flex justify-between w-screen top-0 ">
            GOLDEN HEN 🐔
            <div className="mr-10 font-jost">
                <Link to="/sign-up">
                    <button className="mr-5 btn btn-outline btn-info">
                        SIGN UP
                    </button>
                </Link>
                <Link to="/login">
                    <button className="btn btn-outline btn-info">LOGIN</button>
                </Link>
            </div>
        </nav>
    );
}
