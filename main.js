
import {canvas as widget} from "./modules/controller.js";


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByClassName("main")[0];
    
    main.appendChild(widget);
});