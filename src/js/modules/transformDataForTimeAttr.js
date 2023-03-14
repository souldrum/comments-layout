const transformDataForTimeAttr = (userDate) => {
    let modifiedDate = userDate.split("-").reverse().join("-");

    const now = new Date();
    const addZero = (value) => (value < 10 ? `0${value}` : value);

    if (!modifiedDate) {
        modifiedDate = `${addZero(now.getDate())}-${addZero(
            +now.getMonth() + 1
        )}-${now.getFullYear()}`;
    }
    return modifiedDate;
};

export default transformDataForTimeAttr;
