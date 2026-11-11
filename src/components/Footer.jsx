import { Link } from "react-router";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="max-w-7xl container m-auto">
            <div className="dotted flex flex-col gap-4 md:gap-8 justify-center items-center p-8 md:p-12 mx-2 md:mx-3 inset-shadow-sm inset-shadow-neutral-400/50 bg-neutral-200/50 rounded-t-4xl *:w-full *:max-w-5xl">
                <Logo />
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="md:grow">
                        <p className="text-2xl md:text-4xl max-w-[20ch]">Stay organized and boost your productivity</p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 [&_a::before]:content-['➔'] [&_a::before]:text-neutral-400/60 [&_a::before]:mr-4">
                        <h2 className="sr-only">Company Links</h2>
                        <ul className="flex flex-col">
                            <li>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                            <li>
                                <Link to={"/about"}>About Us</Link>
                            </li>
                        </ul>
                        <h2 className="sr-only">Products</h2>
                        <ul className="flex flex-col">
                            <li>
                                <Link to={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={"/contact-us"}>Contact Us</Link>
                            </li>
                            <li>
                                <Link to={"/contact-us"}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:mt-50 flex flex-wrap gap-4 border-t-1 pt-8 border-neutral-400">
                    <p className="grow">© 2026. All rights reserved.</p>
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}