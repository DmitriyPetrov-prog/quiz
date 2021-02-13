const resultsTemplate = statistics => {
    return `
        <div class="results">
            <p class="results__rating">Rating: ${statistics.result.toFixed(2)}%</p>
            <button class="btn" data-type="newQuiz">Start new Quiz</button>
            
             <div class="results__questions">
                ${statistics.userResults.map((q, i) => {
                    return questionResult(q, i)
                }).join("")}
             </div>
            
        </div>  
          
    `;
}

export {
    resultsTemplate
}
const questionResult = (question, index) => {
    const userAnswer = question.userAnswer;
    const correctAnswer = question.correctAnswer;
    const questionNumber = index + 1;

    return `
       <div class="question ${isCorrect(userAnswer, correctAnswer) ? "correct" : "incorrect"}">
            <div class="question__number">№${questionNumber}</div>
            <div class="question__text">${question.questionText}</div>
            <div class="question__answer">
                <div>
                    <div>Your answer:</div>
                    <div>${userAnswer}</div>
                </div>
                <div>
                    <div>Correct answer:</div>
                    <div>${correctAnswer}</div>
                </div>         
            </div>
            
       </div> 
    `;
}

const isCorrect = (answer, correctAnswer) => {
    return answer === correctAnswer;
}
