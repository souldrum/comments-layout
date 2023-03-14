import createComment from "./createComment";

const deleteCommentaries = (arrComments, commentsWrapp) => {
    const allComments = document.querySelectorAll(".commentaries__item");

    allComments.forEach((comment, i) => {
        const trash = comment.querySelector(".commentaries__delete");

        trash.addEventListener("click", () => {
            comment.remove();
            arrComments.splice(i, 1);

            //рекурсия для обнуления
            createComment(arrComments, commentsWrapp);
        });
    });
};

export default deleteCommentaries;
