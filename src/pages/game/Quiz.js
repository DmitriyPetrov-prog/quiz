import {quizTemplate} from "./quizTemplate";
import {DataLoader} from "../../data/DataLoader";
import {DotedPreloader} from "../../preloader/DotedPreloader";
import {Fetch} from "../../data/Fetch";

const Quiz = class {
    constructor(root, url) {
        this.root = root;
        this.url = url;
        this.dataFromAPIWithPreloader = new DataLoader(new DotedPreloader(this.root), new Fetch(), this.url);

        this.init();
    }

    init() {
        this.action = this.action.bind(this);
        this.root.addEventListener("click", this.action);
    }

    action(event) {
        if (event.target.dataset.type === "answer") {
            this.chooseAnswer(event)
        }
        if (event.target.dataset.type === "next") {
            this.getNextQuestion()
        }
    }

    chooseAnswer(event) {
        const answersBtn = this.root.querySelectorAll("[data-type='answer']");
        const nextBtn = this.root.querySelector("[data-type='next']");

        const correctAnswer = this.currentQuestion.correct_answer;
        const current = event.target;


        if (current.value === correctAnswer) {
            current.classList.add("correct");
            this.correctAnswerCounter++;
        } else {
            current.classList.add("incorrect");
            Array.from(answersBtn).find(b => b.value === correctAnswer).classList.add("correct")
        }
        answersBtn.forEach(btn => btn.style.pointerEvents = "none");
        nextBtn.style.visibility = "visible";
    }

    getNextQuestion() {
        const currentQuestionNumber = this.currentIndex + 1;

        if (this.currentIndex < this.numberOfQuestions) {
            this.currentQuestion = this.questions[this.currentIndex]
            this.renderQuestion(this.currentQuestion, this.numberOfQuestions, currentQuestionNumber);

            this.currentIndex++;
        } else {
            this.showResults();
        }
    }

    showResults() {
        this.destroy();
        const statistics = this.numberOfQuestions ? (this.correctAnswerCounter *100) / this.numberOfQuestions : 0;
        this.root.innerHTML = `<h1>Your results is: ${statistics.toFixed(2)}%</h1>`;
    }

    async startQuiz() {
        const {response_code, results} = await this.dataFromAPIWithPreloader.getData();
        if (response_code !== 0) {
            console.error("something goes wrong. please try later")
        }

        this.questions = this.decode(results);
        this.numberOfQuestions = results.length;
        this.currentIndex = 0;
        this.currentQuestion = results[this.currentIndex - 1];
        this.correctAnswerCounter = 0;
        this.getNextQuestion()

    }

    decode(obj) {
        for (let [key, value] of Object.entries(obj)) {
            if (typeof value === "object" && value !== null) {
                this.decode(value)
            } else {
                obj[key] = decodeURIComponent(value);
            }
        }
        return obj;
    }


    renderQuestion(question, len, currentIndex) {
        this.root.innerHTML = "";
        this.root.insertAdjacentHTML('afterbegin', quizTemplate(question, len, currentIndex));
    }

    destroy(){
        this.root.innerHTML = "";
        this.root.removeEventListener("click", this.action);
    }


}

export {
    Quiz
}

