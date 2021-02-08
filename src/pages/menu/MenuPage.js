import {URL} from "../../constants";
import {menuTemplate} from "./menuTemplate";
import {quizCategory, quizDifficulty, quizType} from "../../plugins/select/selectData";
import {SelectPlugin} from "../../plugins/select/select";
import {DataLoader} from "../../data/DataLoader";
import {DotedPreloader} from "../../preloader/DotedPreloader";
import {Fetch} from "../../data/Fetch";
import {buildURL} from "../../data/buildURL";
import {QuizPage} from "../quiz/QuizPage";

const MenuPage = class {
    constructor(root) {
        this.root = root;
        this.url = URL.CATEGORIES;
        this.dataFromAPIWithPreloader = new DataLoader(new DotedPreloader(this.root), new Fetch(), this.url);

        this.init();
    }

    async render() {
        this.root.insertAdjacentHTML('afterbegin', menuTemplate())

        const {trivia_categories} = await this.dataFromAPIWithPreloader.getData();
        [quizCategory(trivia_categories), quizDifficulty(), quizType()].forEach(category => {
            new SelectPlugin(category.selector, category.options)
        });
    }

    init() {
        this.createQuiz = this.createQuiz.bind(this);
        this.root.addEventListener("click", this.createQuiz);
    }

    createQuiz(event) {
        if (event.target.id === "start") {
            event.preventDefault();

            const url = buildURL(this.getQuizOptions());
            this.destroy();
            new QuizPage(this.root, url).startQuiz();
        }
    }

    getQuizOptions() {
        const getDataFromSelect = (selector) => {
            return this.root
                .querySelector(`#${selector}`)
                .querySelector("[data-type='input_value']")
                .dataset.value;
        };

        const questionQuantity =
            Number(
                this.root
                    .querySelector("#questionQuantity")
                    .value
            );

        const category = getDataFromSelect("category");
        const difficulty = getDataFromSelect("difficulty");
        const type = getDataFromSelect("type");

        return {
            questionQuantity,
            category,
            difficulty,
            type,
        }
    }

    destroy() {
        this.root.innerHTML = "";
        this.root.removeEventListener("click", this.createQuiz);
    }
}

export {
    MenuPage
}