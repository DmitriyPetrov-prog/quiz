const quizTemplate = (options, numberOfQuestions, currentQuestionNumber) => {
    const answers = answersToHTML(unpackQuestionsToArray(options));
    const nextBtnText = currentQuestionNumber < numberOfQuestions ? "Next question" : "Show results";

    return `
        <div class="quiz">
            <div class="quiz__info">
                <div class="quiz__category">Category: ${options.category}</div>
                <div class="quiz__difficulty">Difficulty: ${options.difficulty}</div>
                <div class="quiz__counter">Question ${currentQuestionNumber} of ${numberOfQuestions}</div>
            </div>
            
            <div class="quiz__question">${options.question}</div>
            <div class="quiz__answers">
                ${shuffle(answers).join("")}
            </div>
            <button class="next btn" data-type="next">${nextBtnText}</button>  
        </div>
     `;
}

const unpackQuestionsToArray = options => {
    return [...options.incorrect_answers, options.correct_answer];
}

const answersToHTML = answers => {
    return answers
        .map(answer => `<button class="quiz__answer btn" value="${answer}" data-type="answer">${answer}</button>`);
}

const shuffle = array => {
    let result = [...array];
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

export {
    quizTemplate
}