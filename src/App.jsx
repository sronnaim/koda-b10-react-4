import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Header />
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}