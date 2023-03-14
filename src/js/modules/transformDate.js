const transformDate = (userDate) => {
    let dateValue = userDate.split("-").reverse().join(".");

    const now = new Date();
    const addZero = (value) => (value < 10 ? `0${value}` : value);
    const today = addZero(now.getDate());
    const yesterday = addZero(now.getDate() - 1);
    const twoDayAgo = addZero(now.getDate() - 2);

    if (!dateValue) {
        dateValue = `${addZero(now.getDate())}.${addZero(
            +now.getMonth() + 1
        )}.${now.getFullYear()}`;
    }

    switch (true) {
        case dateValue.startsWith(today):
            return (dateValue = "сегодня");
        case dateValue.startsWith(yesterday):
            return (dateValue = "вчера");
        case dateValue.startsWith(twoDayAgo):
            return (dateValue = "2 дня назад");
        default:
            return dateValue;
    }
};

export default transformDate;
