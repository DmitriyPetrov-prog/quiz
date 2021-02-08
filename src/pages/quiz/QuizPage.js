import {quizTemplate} from "./quizTemplate";
import {DataLoader} from "../../data/DataLoader";
import {DotedPreloader} from "../../preloader/DotedPreloader";
import {Fetch} from "../../data/Fetch";
import {Quiz} from "./Quiz";

const QuizPage = class {
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
            this.chooseAnswer(event);
        }
        if (event.target.dataset.type === "next") {
            this.renderNextQuestion();
        }
    }

    chooseAnswer(event) {
        const answersBtn = this.root.querySelectorAll("[data-type='answer']");
        const nextBtn = this.root.querySelector("[data-type='next']");

        const correctAnswer = this.quiz.currentQuestion.correct_answer;
        const userAnswer = event.target.value;


        if (userAnswer === correctAnswer) {
            event.target.classList.add("correct");
            this.quiz.increaseCorrectAnswerCounter();
        } else {
            event.target.classList.add("incorrect");
            Array.from(answersBtn).find(b => b.value === correctAnswer).classList.add("correct")
        }
        this.quiz.addUserResult(this.quiz.currentQuestion.question, correctAnswer, userAnswer);
        answersBtn.forEach(btn => btn.style.pointerEvents = "none");
        nextBtn.style.visibility = "visible";
    }



    showResults() {
        this.destroy();
        console.log(this.quiz.getQuizStatistic())
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


    renderQuestion(question, {len, currentIndex}) {
        this.root.innerHTML = "";
        this.root.insertAdjacentHTML('afterbegin', quizTemplate(question, len, currentIndex));
    }

    destroy(){
        this.root.innerHTML = "";
        this.root.removeEventListener("click", this.action);
    }

    async startQuiz() {
        const {response_code, results} = await this.dataFromAPIWithPreloader.getData();
        if (response_code !== 0) {
            console.error("something goes wrong. please try later")
        }
        this.quiz = new Quiz(this.decode(results));
        this.renderNextQuestion()
    }

    renderNextQuestion() {

        if (this.quiz.hasNextQuestion()) {
            this.renderQuestion(this.quiz.getNextQuestion(), this.quiz.getOptions());
        } else {
            this.showResults();
        }
    }
}


export {
    QuizPage
}

