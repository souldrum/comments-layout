const postText = () => {
    const postField = document.querySelector(".post__text");

    const postText =
        "Привет! Я новичок в программировании. Подскажите, с какого языка лучше начать? Только не предлагайте JavaScript, он очень сложный....";

    postField.textContent = postText;
};

export default postText;
