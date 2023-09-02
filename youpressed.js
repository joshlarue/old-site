const textbox = document.querySelector("#textbox");
const output = document.querySelector("#output");

textbox.addEventListener("keydown", (event) => {
    output.textContent = `you pressed "${event.key}"`;
});