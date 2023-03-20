const form = document.forms.commentaries;
const textArea = form.elements.textfield;

//Создание блока ошибки валидации
const errorMessage = document.createElement("div");
errorMessage.classList.add("commentaries-form__error_hidden");
errorMessage.textContent = "Это поле обязательно для заполнения!";
textArea.parentNode.before(errorMessage);

const validateField = (activeInput, targetInput) => {
    if (!targetInput.value || targetInput.value.trim() === "") {
        targetInput.addEventListener("input", () => {
            activeInput.removeAttribute("disabled");
            errorMessage.classList.remove("commentaries-form__error");
            errorMessage.classList.add("commentaries-form__error_hidden");
            targetInput.classList.remove("input_error");
        });

        errorMessage.classList.add("commentaries-form__error");
        errorMessage.classList.remove("commentaries-form__error_hidden");
        targetInput.classList.add("input_error");
        targetInput.focus();

        activeInput.setAttribute("disabled");
    }
};
export default validateField;
