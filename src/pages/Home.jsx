import { Icon } from "../components/Logo";

export default function Home() {
    return (
        <>
            <section className="max-w-7xl mx-auto mb-40">
                <div className="dotted mx-2 md:mx-3 inset-shadow-sm inset-shadow-neutral-400/50 bg-neutral-200/50 rounded-4xl py-40">
                    <div className="flex justify-center py-4" aria-hidden={true}>
                        <Icon />
                    </div>
                    <h1 className="text-center text-5xl max-w-[15ch] m-auto">My Home Page, <span className="text-neutral-400">just like home</span></h1>
                </div>
            </section>
        </>
    )
}