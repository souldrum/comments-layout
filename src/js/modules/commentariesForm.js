import transformDate from "./transformDate";
import transformDataForTimeAttr from "./transformDataForTimeAttr";
import createComments from "./createComments";
import validateField from "./validateField";

const commentariesForm = () => {
    const form = document.forms.commentaries;
    const inputName = form.elements.author;
    const inputDate = form.elements.date;
    const textArea = form.elements.textfield;
    const closeForm = form.querySelector(".commentaries-form__close");

    let commentariesStack = [];

    if (localStorage.getItem("comments")) {
        commentariesStack = JSON.parse(localStorage.getItem("comments"));
        createComments(commentariesStack);
    }

    // createComments(commentariesStack);

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

        //Проверки незаполненных полей
        validateField(textArea, inputName);
        validateField(inputName, textArea);

        const formBody = {
            author: inputName.value,
            date: transformDate(inputDate.value),
            dateForTimeAttr: transformDataForTimeAttr(inputDate.value),
            comment: textArea.value,
            isLiked: false,
            likeCounter: 0,
        };

        commentariesStack.push(formBody);

        localStorage.setItem("comments", JSON.stringify(commentariesStack));

        console.log(commentariesStack);
        createComments(commentariesStack);

        e.target.reset();
    });
};

export default commentariesForm;
