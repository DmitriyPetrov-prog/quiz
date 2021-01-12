import {CATEGORIES_URL} from "../../constants";
import {menuTemplate} from "./menuTemplate";
import {quizCategory, quizDifficulty, quizType} from "../../plugins/select/selectData";
import {SelectPlugin} from "../../plugins/select/select";
import {dataLoader} from "../../dataLoader";
import {Preloader} from "../../preloader/Preloader";
import {DataRequester} from "../../DataRequester";

const Menu = class {
    constructor(root) {
        this.root = root;
        this.url = CATEGORIES_URL;
        this.startBtn = null;

        this.render();
        this.init();
    }

    async render() {
        this.root.innerHTML = menuTemplate();

        const {trivia_categories} = await this.getDataFromAPI();
        [quizCategory(trivia_categories), quizDifficulty(), quizType()].forEach(category => {
            new SelectPlugin(category.selector, category.options)
        });
    }

    async getDataFromAPI() {
        return await dataLoader(new Preloader(this.root), new DataRequester(this.url))
    }

    init() {
        this.startBtn = this.root.querySelector("#start");

        this.createQuiz = this.createQuiz.bind(this);
        this.startBtn.addEventListener("click", this.createQuiz);
    }

    createQuiz(event) {
        event.preventDefault();
        console.log(this.getQuizOptions())
        this.destroy();
        this.root.innerHTML = "<h1>Quiz is comming</h1>";
    }

    getQuizOptions() {
        const questionQuantity =
            Number(
                this.root
                    .querySelector("#questionQuantity")
                    .value
            );

        const category = this.root
            .querySelector("#category")
            .querySelector("[data-type='input_value']")
            .innerText;

        const difficulty = this.root
            .querySelector("#difficulty")
            .querySelector("[data-type='input_value']")
            .innerText;

        const type = this.root
            .querySelector("#type")
            .querySelector("[data-type='input_value']")
            .innerText;

        return {
            questionQuantity,
            category,
            difficulty,
            type,
        }
    }

    destroy() {
        this.root.innerHTML = "";
        this.startBtn.removeEventListener("click", this.createQuiz);
    }
}

export {
    Menu
}