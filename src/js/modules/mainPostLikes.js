const mainPostLikes = () => {
    let likesState = {
        isLiked: false,
        likesCounter: 100,
    };

    if (localStorage.getItem("mainPostLikeState")) {
        likesState = JSON.parse(localStorage.getItem("mainPostLikeState"));
    }

    const likesBlock = document.createElement("div");
    likesBlock.className = "post-actions__icon-wrapper like-wrapper";
    likesBlock.setAttribute("title", "Нравится");

    likesBlock.innerHTML = `
        <i class="post-actions__icon ${
            likesState.isLiked ? "fa-solid" : "fa-regular"
        } fa-heart post-like"></i>
        <div class="post-actions__counter like-counter ${
            likesState.isLiked ? "like-counter_red" : ""
        }">${likesState.likesCounter}</div>
    `;

    likesBlock.addEventListener("click", () => {
        let counter = likesState.likesCounter;
        if (!likesState.isLiked) {
            counter++;
            likesState = {
                isLiked: true,
                likesCounter: counter,
            };
        } else {
            counter--;
            likesState = {
                isLiked: false,
                likesCounter: counter,
            };
        }

        localStorage.setItem("mainPostLikeState", JSON.stringify(likesState));

        likesBlock.innerHTML = `
            <i class="post-actions__icon ${
                likesState.isLiked ? "fa-solid" : "fa-regular"
            } fa-heart post-like"></i>
            <div class="post-actions__counter like-counter ${
                likesState.isLiked ? "like-counter_red" : ""
            }">${likesState.likesCounter}</div>
        `;
    });

    return likesBlock;
};

export default mainPostLikes;
