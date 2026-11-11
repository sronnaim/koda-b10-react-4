import { Link } from "react-router";

export default function Footer() {
    return (
        <footer>
            <p>© 2026. All rights reserved.</p>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
        </footer>
    )
}