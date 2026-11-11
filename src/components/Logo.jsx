import { Link } from "react-router";

export default function Logo() {
    return (
        <Link to={"/"} className="flex gap-3 items-center text-2xl font-semibold">
            <span className="grid gap-1 *:rounded-full *:bg-slate-900 *:first:bg-blue-500 *:w-2 *:aspect-square grid-cols-2" aria-hidden={true}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </span>
            ChronoTask
        </Link>
    )
}