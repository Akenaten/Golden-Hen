import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export function Navbar() {
    const pathname = useLocation().pathname;
    return (
        <nav className="p-4 items-center text-3xl absolute font-joti h-16 bg-black flex justify-between w-screen top-0 ">
            <Link to="/">GOLDEN HEN 🐔</Link>
            <div className="mr-10 font-jost">
                {pathname !== "/sign-up" && (
                    <Link to="/sign-up">
                        <button className="btn ml-3 btn-outline btn-info">
                            SIGN UP
                        </button>
                    </Link>
                )}
                {pathname !== "/login" && (
                    <Link to="/login">
                        <button className="ml-3 btn btn-outline btn-info">
                            LOGIN
                        </button>
                    </Link>
                )}
            </div>
        </nav>
    );
}
