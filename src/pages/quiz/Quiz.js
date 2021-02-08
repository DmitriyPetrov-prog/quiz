const Quiz = class {
    constructor(questions) {
        this.questions = questions;
        this.numberOfQuestions = questions.length;
        this.correctAnswerCounter = 0;
        this.userResults = [];
    }

    increaseCorrectAnswerCounter() {
        this.correctAnswerCounter++;
    }

    hasNextQuestion() {
        return this.questions.length;
    }

    getNextQuestion() {
        this.currentQuestion = this.questions.pop();
        return this.currentQuestion;
    }

    getOptions() {
        return {
            len: this.numberOfQuestions,
            currentIndex: this.numberOfQuestions - this.questions.length
        }
    }

    addUserResult(questionText, correctAnswer, userAnswer) {
        this.userResults.push({
            questionText,
            correctAnswer,
            userAnswer
        });
    }

    getQuizStatistic() {
        return {
            result: this.correctAnswerCounter ? (this.correctAnswerCounter *100) / this.numberOfQuestions : 0,
            userResults: this.userResults
        }
    }
}

export {
    Quiz
}