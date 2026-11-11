import { useSyncExternalStore } from "react";
import { Form } from "react-router";
import { getSnapshot, subscribe } from "../lib/messages";


export default function ContactUs() {
    const raw = useSyncExternalStore(subscribe, getSnapshot, () => null)
    const messages = JSON.parse(raw)

    return (
        <>
            <section>
                {messages && JSON.stringify(messages)}
                <h1>Contact Us</h1>
                <Form action="/contact-us" method="post">
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" autoComplete="name" required></input>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" autoComplete="email" required></input>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="msg" required></textarea>
                    </div>
                    <button type="submit">Send</button>
                </Form>
            </section>
        </>
    )
}