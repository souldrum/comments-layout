const openForm = () => {
    const form = document.forms.commentaries;
    const openForm = document.querySelector(".speech-wrapper");
    const openFormText = document.querySelector(".message-help__text_blue");
    const inputName = document.querySelector(".commentaries-form__name");

    openForm.addEventListener("click", () => {
        form.classList.toggle("commentaries-form_hidden");
        inputName.focus();
    });

    openFormText.addEventListener("click", () => {
        form.classList.remove("commentaries-form_hidden");
        inputName.focus();
    });
};

export default openForm;
