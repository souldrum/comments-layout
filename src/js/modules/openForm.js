const openForm = () => {
    const form = document.querySelector(".commentaries-form");
    const openForm = document.querySelector(".speech-wrapper");
    const openFormText = document.querySelector(".message-help__text_blue");

    openForm.addEventListener("click", () => {
        form.classList.toggle("commentaries-form_hidden");
    });

    openFormText.addEventListener("click", () => {
        form.classList.remove("commentaries-form_hidden");
    });
};

export default openForm;
