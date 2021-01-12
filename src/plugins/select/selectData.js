const quizCategory = data => {
    return {
        selector: "#category",
        options : {
            label: "Select category",
            data: [
                {id: 1, name: "Any type"},
                ...data
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
                {id: 1, name: "Any difficulty"},
                {id: 2, name: "Easy"},
                {id: 3, name: "Medium"},
                {id: 4, name: "Hard"},
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
                {id: 1, name: "Any type"},
                {id: 2, name: "Multiple choice"},
                {id: 3, name: "True/false"},
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