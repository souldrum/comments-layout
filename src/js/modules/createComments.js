import likesCounter from "./likesCounter";
import deleteCommentaries from "./deleteCommentaries";
import messageCounter from "./messageCounter";
import commentItem from "./commentItem";
import hideNoActiveBlock from "./hideNoActiveBlock";

const createComments = (comments) => {
    const commentsList = document.querySelector(".commentaries__list");

    //Скрывать, или показывать блоки в зависимости от наличия, или отсутствия комментариев

    hideNoActiveBlock(
        comments,
        "commentaries_hidden",
        "message-help_hidden",
        "commentaries-form_hidden"
    );

    //Создание элемента

    commentsList.innerHTML = "";

    comments.forEach((item, i) => {
        const { author, date, dateForTimeAttr, comment, isLiked, likeCounter } =
            item;

        const oneComment = commentItem(
            dateForTimeAttr,
            date,
            isLiked,
            likeCounter
        );
        commentsList.append(oneComment);

        const authorName = document.querySelectorAll(".commentaries__author");
        authorName[i].textContent = author;
        const text = document.querySelectorAll(".commentaries__text");
        text[i].textContent = comment;
    });

    //лайки
    likesCounter({
        commentsData: comments,
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
