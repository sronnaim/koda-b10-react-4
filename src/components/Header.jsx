import { Link } from "react-router";
import Logo from "./Logo";

export default function Header() {
    return (
        <header className="p-4 max-w-7xl container justify-between flex items-center m-auto">
            <Logo />
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}