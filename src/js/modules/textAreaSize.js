import autosize from "autosize";

const textAreaSize = () => {
    const textArea = document.querySelector(".commentaries-form__text-field");

    return autosize(textArea);
};

export default textAreaSize;
