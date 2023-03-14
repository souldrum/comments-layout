const likesCounter = (props) => {
    const {
        triggerSelector,
        likeSelector,
        counterSelector,
        defaultLike = "fa-regular",
        activeLike = "fa-solid",
        activeCounter = "like-counter_red",
    } = props;

    const likeWrappers = document.querySelectorAll(triggerSelector);
    const likes = document.querySelectorAll(likeSelector);
    const likeCounters = document.querySelectorAll(counterSelector);

    let counter;

    likeCounters.forEach((likeCounter) => {
        counter = +likeCounter.textContent;

        if (counter === 0) {
            likeCounter.style.display = "none";
        }
    });

    likeWrappers.forEach((wrapper, i) => {
        wrapper.addEventListener("click", () => {
            counter = +likeCounters[i].textContent;

            if (likes[i].classList.contains(defaultLike)) {
                likeCounters[i].style.display = "flex";
                counter++;

                likes[i].classList.remove(defaultLike);
                likes[i].classList.add(activeLike);
                likeCounters[i].classList.add(activeCounter);

                likeCounters[i].textContent = counter;
            } else {
                counter--;

                if (counter === 0) {
                    likeCounters[i].style.display = "none";
                }

                likes[i].classList.add(defaultLike);
                likes[i].classList.remove(activeLike);
                likeCounters[i].classList.remove(activeCounter);

                likeCounters[i].textContent = counter;
            }
        });
    });
};

export default likesCounter;
