import {MenuPage} from "../menu/MenuPage";
import {resultsTemplate} from "./resultsTemplate";

const ResultsPage = class {
    constructor(root, statistics) {
        this.root = root;
        this.statistics = statistics;

        this.init();
    }

    init() {
        this.startNewQuiz = this.startNewQuiz.bind(this);
        this.root.addEventListener("click", this.startNewQuiz);
    }

    render() {
        console.log(this.statistics)
        this.root.insertAdjacentHTML('afterbegin', resultsTemplate(this.statistics));
    }

    destroy() {
        this.root.innerHTML = "";
        this.root.removeEventListener("click", this.startNewQuiz);
    }

    startNewQuiz(event) {
        if (event.target.dataset.type === "newQuiz") {
            this.destroy();
            new MenuPage(this.root).render();
        }

    }
}
export {
    ResultsPage
}

// const res = {
//     result: 100,
//     userResults: [
//         {questionText: "The 2010 film 'The Social Network' is a biographical drama film about MySpace founder Tom Anderson.", correctAnswer: "False", userAnswer: "True"},
//         {questionText: "In which 1973 film does Yul Brynner play a robotic…boy who malfunctions and goes on a killing	spree?", correctAnswer: "Westworld", userAnswer: "Westworld"}
//     ]
//
// }

