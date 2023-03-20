import postText from "./modules/postText";
import openForm from "./modules/openForm";
import commentariesForm from "./modules/commentariesForm";
import textAreaSize from "./modules/textAreaSize";
import "../sass/style.sass";

window.addEventListener("DOMContentLoaded", () => {
    "use strict";

    postText();

    openForm();
    commentariesForm();
    textAreaSize();
});
