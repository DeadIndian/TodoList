import "./style.css";
import { ak, leftBar, displayProjects } from "./assets.js";
import { Projects, storeProject, getAllProjects } from "./core.js";

let def = new Projects("default", "Your default project");

let name = prompt("Enter your ToDo");

def.newToDo(name);

storeProject(def);

console.log(localStorage.length);
console.log("Projects : " + getAllProjects().toString());

const bg = document.getElementById("bg");

// bg.appendChild(ak);

leftBar.appendChild(displayProjects(getAllProjects()));

bg.appendChild(leftBar);
