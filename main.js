
import {model as widget} from "./modules/controller.js";
// test change

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementsByClassName("main")[0];
    
    main.appendChild(widget.getCanvas());
});