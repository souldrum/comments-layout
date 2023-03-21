import postText from "./modules/postText";
import openForm from "./modules/openForm";
import commentariesForm from "./modules/commentariesForm";
import textAreaSize from "./modules/textAreaSize";
import "../sass/style.sass";
import mainPostLikes from "./modules/mainPostLikes";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const parent = document.querySelector(".post-actions");
    parent.prepend(mainPostLikes());

    postText();
    openForm();
    commentariesForm();
    textAreaSize();
});
