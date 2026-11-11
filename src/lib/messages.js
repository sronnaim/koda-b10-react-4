export function subscribe(notifyReact) {
    window.addEventListener("storage", notifyReact)

    return () => window.removeEventListener("storage", notifyReact)
}

export function getSnapshot() {
    return localStorage.getItem("messages")
}

export function addMessage(newMsg) {
    const messages = JSON.parse(localStorage.getItem("messages")) || []
    messages.push(newMsg)
    localStorage.setItem("messages", JSON.stringify(messages))

    window.dispatchEvent(new StorageEvent("storage"))
}