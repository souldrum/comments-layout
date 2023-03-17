import transformDate from "./transformDate";
import transformDataForTimeAttr from "./transformDataForTimeAttr";
import createComments from "./createComments";

const commentariesForm = () => {
    const form = document.forms.commentaries;
    const inputName = form.elements.author;
    const inputDate = form.elements.date;
    const textArea = form.elements.textfield;
    const closeForm = form.querySelector(".commentaries-form__close");

    //Создание блока ошибки валидации
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("commentaries-form__error_hidden");
    errorMessage.textContent = "Это поле обязательно для заполнения!";
    textArea.parentNode.before(errorMessage);

    let commentariesStack = [];

    createComments(commentariesStack);

    if (localStorage.getItem("comments")) {
        commentariesStack = JSON.parse(localStorage.getItem("comments"));
        createComments(commentariesStack);
    }

    //Отправка textarea при нажатии на Enter
    const submitTextArea = (e) => {
        if (e.which === 13 && !e.shiftKey) {
            e.preventDefault();

            if (!e.repeat) {
                const newEvent = new Event("submit", { cancelable: true });
                e.target.form.dispatchEvent(newEvent);
            }
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

        //Функция проверки незаполненных полей
        const validateField = (activeInput, targetInput) => {
            if (!targetInput.value || targetInput.value.trim() === "") {
                targetInput.addEventListener("input", () => {
                    activeInput.removeAttribute("disabled");
                    errorMessage.classList.remove("commentaries-form__error");
                    errorMessage.classList.add(
                        "commentaries-form__error_hidden"
                    );
                    targetInput.classList.remove("input_error");
                });

                errorMessage.classList.add("commentaries-form__error");
                errorMessage.classList.remove(
                    "commentaries-form__error_hidden"
                );
                targetInput.classList.add("input_error");
                targetInput.focus();

                activeInput.setAttribute("disabled");
            }
        };
        validateField(textArea, inputName);
        validateField(inputName, textArea);

        const formBody = {
            author: inputName.value,
            date: transformDate(inputDate.value),
            dateForTimeAttr: transformDataForTimeAttr(inputDate.value),
            comment: textArea.value,
        };

        commentariesStack.push(formBody);

        console.log(commentariesStack);
        createComments(commentariesStack);

        localStorage.setItem("comments", JSON.stringify(commentariesStack));
        e.target.reset();
    });
};

export default commentariesForm;
