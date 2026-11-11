import { Link } from "react-router";

export default function Header() {
    return (
        <header className="p-4 container justify-between flex max-w-5xl items-center m-auto">
            <Link to={"/"} className="flex gap-2 items-center text-2xl font-semibold">
                <span className="grid gap-1 *:rounded-full *:bg-slate-900 *:first:bg-blue-500 *:w-2 *:aspect-square grid-cols-2" aria-hidden={true}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                ChronoTask
            </Link>
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