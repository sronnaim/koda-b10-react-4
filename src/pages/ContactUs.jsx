import { useSyncExternalStore } from "react";
import { Form } from "react-router";
import { getSnapshot, subscribe } from "../lib/messages";


export default function ContactUs() {
    const raw = useSyncExternalStore(subscribe, getSnapshot, () => null)
    const messages = JSON.parse(raw)

    return (
        <>
            <section className="max-w-7xl mx-auto mb-30">
                <h1 className="text-4xl p-4 mb-4">Contact Us</h1>
                <Form action="/contact-us" method="post" className="dotted bg-neutral-200/50 inset-shadow-sm mx-2 md:mx-3 inset-shadow-neutral-400/50 p-8 rounded-4xl flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label htmlFor="name" className="text-lg">Name</label>
                        <input
                            className="p-4 rounded-2xl border border-neutral-400/50 bg-neutral-50 shadow-sm shadow-neutral-400/50 focus:outline-none"
                            id="name" type="text" name="name" autoComplete="name" required></input>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="email" className="text-lg">Email</label>
                        <input className="p-4 rounded-2xl border border-neutral-400/50 bg-neutral-50 shadow-sm shadow-neutral-400/50 focus:outline-none"
                            id="email" type="email" name="email" autoComplete="email" required></input>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label htmlFor="msg" className="text-lg">Message</label>
                        <textarea className="p-4 rounded-2xl border border-neutral-400/50 bg-neutral-50 shadow-sm shadow-neutral-400/50 focus:outline-none"
                            name="msg" id="msg" required></textarea>
                    </div>
                    <button type="submit" className="w-fit bg-blue-500 text-neutral-50 font-semibold px-6 py-4 rounded-2xl border border-neutral-400/50 shadow-sm shadow-neutral-400/50">Send</button>
                </Form>
            </section>
            <section className="max-w-7xl mx-auto px-4 mb-40">
                <h2 className="text-4xl text-center">Messages</h2>
                <ol className="grid px-20 sm:grid-cols-2 gap-6 items-center my-10">
                    {messages && messages.map((msg, i) => {
                        return (
                            <li className={`relative bg-neutral-200/50 border border-neutral-400/50 rounded-2xl shadow-sm shadow-neutral-400/50 before:p-4 before:text-blue-600 before:font-bold before:absolute before:inset-0 before:content-[attr(data-index)] p-8`} data-index={i + 1}>
                                <blockquote className="">{msg.msg}</blockquote>
                                <p>{`—${msg.name} ${msg.email}`}</p>
                            </li>
                        )
                    })}
                </ol>
            </section>
        </>
    )
}