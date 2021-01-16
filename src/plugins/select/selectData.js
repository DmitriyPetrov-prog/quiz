const quizCategory = data => {
    const transformedData = data.map(item => {
        item.value = item.id;
        return item;
    });

    return {
        selector: "#category",
        options : {
            label: "Select category",
            data: [
                {id: 1, name: "Any type", value: ""},
                ...transformedData
            ],
            selectedId: 1
        }
    }
};

const quizDifficulty = () => {
    return {
        selector: "#difficulty",
        options: {
            label: "Select difficulty",
            data: [
                {id: 1, name: "Any difficulty", value: ""},
                {id: 2, name: "Easy", value: "easy"},
                {id: 3, name: "Medium", value: "medium"},
                {id: 4, name: "Hard", value: "hard"},
            ],
            selectedId: 1
        }

    }
};
const quizType = () => {
    return {
        selector: "#type",
        options: {
            label: "Select type",
            data: [
                {id: 1, name: "Any type", value: ""},
                {id: 2, name: "Multiple choice", value: "multiple"},
                {id: 3, name: "True/false", value: "boolean"},
            ],
            selectedId: 1
        }
    }
};

export {
    quizType,
    quizDifficulty,
    quizCategory
}