
import {canvas as widget} from "./modules/model.js";

const main = document.getElementsByClassName("main")[0];
document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByClassName("main")[0];
    
    main.appendChild(widget);
});