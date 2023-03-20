import createComments from "./createComments";

const deleteCommentaries = (arrComments) => {
    const allComments = document.querySelectorAll(".commentaries__item");

    allComments.forEach((comment, i) => {
        const trash = comment.querySelector(".commentaries__delete");

        trash.addEventListener("click", () => {
            comment.remove();
            arrComments.splice(i, 1);

            localStorage.setItem("comments", JSON.stringify(arrComments));

            // //рекурсия для обнуления
            createComments(arrComments);
        });
    });
};

export default deleteCommentaries;
