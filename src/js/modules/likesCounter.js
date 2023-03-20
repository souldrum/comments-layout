import createComments from "./createComments";

const likesCounter = (props) => {
    const { commentsData, triggerSelector, counterSelector } = props;

    const likeWrapper = document.querySelectorAll(triggerSelector);
    const likeCounterContent = document.querySelectorAll(counterSelector);

    commentsData.forEach((el, i) => {
        let counter;
        console.log(el.likeCounter);

        counter = el.likeCounter;
        if (counter === 0) {
            likeCounterContent[i].style.display = "none";
        }

        likeWrapper[i].addEventListener("click", () => {
            if (el.isLiked === false) {
                el.isLiked = true;

                likeCounterContent[i].style.display = "flex";
                counter++;
            } else {
                el.isLiked = false;

                counter--;

                if (counter === 0) {
                    likeCounterContent[i].style.display = "none";
                }
            }
            el.likeCounter = counter;
            localStorage.setItem("comments", JSON.stringify(commentsData));
            createComments(JSON.parse(localStorage.getItem("comments")));
        });
    });
};

export default likesCounter;
