import {URL} from "../../constants";
import {menuTemplate} from "./menuTemplate";
import {quizCategory, quizDifficulty, quizType} from "../../plugins/select/selectData";
import {SelectPlugin} from "../../plugins/select/select";
import {dataLoader} from "../../data/dataLoader";
import {DotedPreloader} from "../../preloader/DotedPreloader";
import {Fetch} from "../../data/Fetch";
import {buildURL} from "../../buildURL";

const Menu = class {
    constructor(root) {
        this.root = root;
        this.url = URL.CATEGORIES;
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
        return await dataLoader(new DotedPreloader(this.root), new Fetch(this.url))
    }

    init() {
        this.startBtn = this.root.querySelector("#start");

        this.createQuiz = this.createQuiz.bind(this);
        this.startBtn.addEventListener("click", this.createQuiz);
    }

    createQuiz(event) {
        event.preventDefault();
        console.log(buildURL(this.getQuizOptions()));
        this.destroy();
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
        this.startBtn.removeEventListener("click", this.createQuiz);
    }
}

export {
    Menu
}