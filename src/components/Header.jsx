import { Link } from "react-router";

export default function Header() {
    return (
        <header>
            <Link to={"/"}>Home</Link>
            <nav>
                <ul>
                    <li>
                        <Link to={"/about"}>About</Link>
                        <Link to={"/contact-us"}>Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}