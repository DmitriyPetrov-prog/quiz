import {preloaderTemplate} from "./preloaderTemplate";

const Preloader = class {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        this.parent.insertAdjacentHTML("afterbegin", preloaderTemplate());
    }

    clear() {
        const loader = this.parent.querySelector("[data-type='preloader']");
        if (loader) {
            loader.parentElement.removeChild(loader);
        }
    }

}

export {
    Preloader
}