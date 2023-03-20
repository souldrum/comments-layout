const hideNoActiveBlock = (arr, classWrapp, classHelp, classForm) => {
    const commentsWrapper = document.querySelector(".commentaries");
    const messageHelp = document.querySelector(".message-help");
    const form = document.forms.commentaries;

    if (!arr.length) {
        commentsWrapper.classList.add(classWrapp);
        messageHelp.classList.remove(classHelp);
        form.classList.add(classForm);
    } else {
        commentsWrapper.classList.remove(classWrapp);
        messageHelp.classList.add(classHelp);
    }
};

export default hideNoActiveBlock;
