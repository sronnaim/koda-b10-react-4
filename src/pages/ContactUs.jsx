import { useEffect } from "react";
import { Form, useActionData } from "react-router";

export default function ContactUs() {
    let actionData = useActionData();

    useEffect(() => {
        if (actionData)
            console.log(actionData)

    }, [actionData])

    return (
        <>
            <section>
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