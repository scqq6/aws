document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("button");
    const output = document.querySelector(".content");

    button.addEventListener("click", async () => {
        const value = document.getElementById("myvalue").value;

        // Your Lambda URL
        const apiUrl = "https://https://rrrorg9iri.execute-api.eu-west-1.amazonaws.com/default/aya-function" + encodeURIComponent(value);

        try {
            const response = await fetch(apiUrl);
            const text = await response.text();

            output.textContent = "Response: " + text;
        } catch (err) {
            output.textContent = "Error: " + err;
        }
    });
});
