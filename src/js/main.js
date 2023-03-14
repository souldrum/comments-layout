import postText from "./modules/postText";
import likesCounter from "./modules/likesCounter";
import openForm from "./modules/openForm";
import commentariesForm from "./modules/commentariesForm";
import textAreaSize from "./modules/textAreaSize";
import "../sass/style.sass";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    postText();
    likesCounter({
        triggerSelector: ".like-wrapper",
        likeSelector: ".post-like",
        counterSelector: ".like-counter",
    });

    likesCounter({
        triggerSelector: ".commentaries-actions",
        likeSelector: ".commentaries-like",
        counterSelector: ".commentaries-like-counter",
    });

    openForm();
    commentariesForm();
    textAreaSize();
});
