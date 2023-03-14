import transformDate from "./transformDate";
import transformDataForTimeAttr from "./transformDataForTimeAttr";
import createComment from "./createComment";

const commentariesForm = () => {
    const form = document.querySelector(".commentaries-form");
    const inputName = form.querySelector(".commentaries-form__name");
    const inputDate = document.querySelector(".commentaries-form__date");
    const textArea = form.querySelector(".commentaries-form__text-field");
    const commentsList = document.querySelector(".commentaries__list");

    const closeForm = form.querySelector(".commentaries-form__close");

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("commentaries-form__error_hidden");
    errorMessage.textContent = "Это поле обязательно для заполнения!";
    textArea.parentNode.before(errorMessage);

    const commentariesStack = [];

    createComment(commentariesStack, commentsList);

    //Отправка textarea при нажатии на Enter
    const submitTextArea = (e) => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();

            if (!e.repeat) {
                const newEvent = new Event("submit", { cancelable: true });
                e.target.form.dispatchEvent(newEvent);
            }
            form.reset();
        }
    };

    textArea.addEventListener("keydown", submitTextArea);

    //Скрывать форму
    closeForm.addEventListener("click", () => {
        form.classList.add("commentaries-form_hidden");
    });

    // Отправка данных
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const formBody = {
            author: inputName.value,
            date: transformDate(inputDate.value),
            dateForTimeAttr: transformDataForTimeAttr(inputDate.value),
            comment: textArea.value,
        };
        commentariesStack.push(formBody);
        createComment(commentariesStack, commentsList);

        e.target.reset();
    });

    return commentariesStack;
};

export default commentariesForm;

// const validateField = (activeInput, targetInput) => {
//     if (!targetInput.value || targetInput.value.trim()) {
//         errorMessage.classList.add("commentaries-form__error");
//         errorMessage.classList.remove("commentaries-form__error_hidden");
//         targetInput.classList.add("input_error");
//         activeInput.toggleAttribute("disabled");
//     }
//     targetInput.addEventListener("input", () => {
//         activeInput.toggleAttribute("disabled");

//         errorMessage.classList.remove("commentaries-form__error");
//         errorMessage.classList.add("commentaries-form__error_hidden");
//         targetInput.classList.remove("input_error");
//         activeInput.disabled = false;
//     });
// };
// validateField(inputName, textArea);
// validateField(textArea, inputName);
