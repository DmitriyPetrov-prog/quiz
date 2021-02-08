import "./scss/index.scss";
import {Menu} from "./pages/menu/Menu";
//import {Quiz} from "./pages/game/Quiz";

const app = document.querySelector("#app");
//const url = "https://opentdb.com/api.php?amount=2&encode=url3986";
new Menu(app).render();

//new Quiz(app, url).startQuiz();
