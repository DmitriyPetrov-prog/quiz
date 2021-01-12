import {dotedPreloaderTemplate} from "./dotedPreloaderTemplate";
import {Preloader} from "./Preloader";

const DotedPreloader = class extends Preloader{

    constructor(parent) {
        super();
        this.parent = parent;
    }

    show() {
        this.parent.insertAdjacentHTML("afterbegin", dotedPreloaderTemplate());
    }

    hide() {
        const loader = this.parent.querySelector("[data-type='preloader']");
        if (loader) {
            loader.parentElement.removeChild(loader);
        }
    }

}

export {
    DotedPreloader
}