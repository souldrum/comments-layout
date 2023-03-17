import likesCounter from "./likesCounter";
import deleteCommentaries from "./deleteCommentaries";
import messageCounter from "./messageCounter";
import commentItem from "./commentItem";

const createComments = (comments) => {
    const commentsList = document.querySelector(".commentaries__list");
    const form = document.forms.commentaries;

    //Скрывать, или показывать блоки в зависимости от наличия, или отсутствия комментариев
    const hideNoActiveBlock = (arr, classWrapp, classHelp, classForm) => {
        const commentsWrapper = document.querySelector(".commentaries");
        const messageHelp = document.querySelector(".message-help");

        if (!arr.length) {
            commentsWrapper.classList.add(classWrapp);
            messageHelp.classList.remove(classHelp);
            form.classList.add(classForm);
        } else {
            commentsWrapper.classList.remove(classWrapp);
            messageHelp.classList.add(classHelp);
        }
    };

    hideNoActiveBlock(
        comments,
        "commentaries_hidden",
        "message-help_hidden",
        "commentaries-form_hidden"
    );

    //Создание элемента

    commentsList.innerHTML = "";

    comments.forEach((item, i) => {
        const { author, date, dateForTimeAttr, comment } = item;

        const oneComment = commentItem(dateForTimeAttr, date);
        commentsList.append(oneComment);

        const authorName = document.querySelectorAll(".commentaries__author");
        authorName[i].textContent = author;
        const text = document.querySelectorAll(".commentaries__text");
        text[i].textContent = comment;
    });

    //лайки
    likesCounter({
        triggerSelector: ".commentaries-actions",
        likeSelector: ".commentaries-like",
        counterSelector: ".commentaries-like-counter",
    });

    //Счетчик комментариев
    messageCounter(comments.length);

    //корзина
    deleteCommentaries(comments);
};

export default createComments;
