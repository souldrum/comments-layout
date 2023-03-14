import likesCounter from "./likesCounter";
import deleteCommentaries from "./deleteCommentaries";
import messageCounter from "./messageCounter";

const createComment = (comments, parent) => {
    const form = document.forms.commentaries;

    //Счетчик комментариев
    messageCounter(comments.length);

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

    parent.innerHTML = "";

    comments.forEach((comment, i) => {
        parent.innerHTML += `
        <li class="commentaries__item">
            <div class="commentaries__header">
                <section class="commentaries__author-wrapper" >
                    <h3 class="commentaries__author"></h3>
                    <time class="commentaries__date" datetime=${comment.dateForTimeAttr}>${comment.date}</time>
                </section>
                <i class="commentaries__delete fa-regular fa-trash-can" title="Удалить комментарий"></i>
            </div>
            <div class="commentaries__content">
                <p class="commentaries__text"></p>
                <div class="commentaries-actions" title="Нравится">
                    <i class="commentaries-actions__icon fa-regular fa-heart commentaries-like"></i>
                    <div class="commentaries-actions__counter commentaries-like-counter">0</div>
                </div>
            </div>
        </li>
    `;
        //Ввод в формы через textContent, чтобы не "сломать"
        const author = document.querySelectorAll(".commentaries__author");
        author[i].textContent = comment.author;
        const text = document.querySelectorAll(".commentaries__text");
        text[i].textContent = comment.comment;

        //корзина
        deleteCommentaries(comments, parent); //второй аргумент для рекурсии (пересоздания списка комментариев) внутри модуля удаления элемента

        //лайки
        likesCounter({
            triggerSelector: ".commentaries-actions",
            likeSelector: ".commentaries-like",
            counterSelector: ".commentaries-like-counter",
        });
    });
};

export default createComment;
