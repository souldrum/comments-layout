const commentItem = (dateAttr, date, isLiked, likeCounter) => {
    //Ввод в формы через textContent, чтобы не "сломать"

    const comment = document.createElement("li");
    comment.classList.add("commentaries__item");
    comment.innerHTML = `
      <div class="commentaries__header">
        <section class="commentaries__author-wrapper" >
            <h3 class="commentaries__author"></h3>
            <time class="commentaries__date" datetime=${dateAttr}>${date}</time>
        </section>
        <i class="commentaries__delete fa-regular fa-trash-can" title="Удалить комментарий"></i>
      </div>
      <div class="commentaries__content">
        <p class="commentaries__text"></p>
        <div class="commentaries-actions" title="Нравится">
            <i class="commentaries-actions__icon ${
                isLiked ? "fa-solid" : "fa-regular"
            } fa-heart commentaries-like"></i>
            <div class="commentaries-actions__counter commentaries-like-counter ${
                isLiked ? "like-counter_red" : ""
            }">${likeCounter}</div>
        </div>
      </div>
  `;

    return comment;
};

export default commentItem;
