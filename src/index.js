import "./scss/index.scss";
import {MenuPage} from "./pages/menu/MenuPage";
// import {ResultsPage} from "./pages/results/ResultsPage";

const app = document.querySelector("#app");

new MenuPage(app).render();
// new ResultsPage(app).render()


