const messageCounter = (value) => {
    const messageCounter = document.querySelector(".answer-counter");

    if (!value) {
        messageCounter.style.display = "none";
    } else {
        messageCounter.style.display = "flex";
        messageCounter.textContent = value;
    }
};

export default messageCounter;
