async function getChatGPTResponse(userMessage) {
    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API Key
    const url = "https://api.openai.com/v1/chat/completions";

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userMessage }]
        }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
}

document.getElementById("sendButton").addEventListener("click", async () => {
    const userMessage = document.getElementById("userInput").value;
    const botResponse = await getChatGPTResponse(userMessage);
    document.getElementById("chatOutput").innerText = botResponse;
});
