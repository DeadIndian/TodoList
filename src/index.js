import "./style.css";
import { leftBar, displayProjects } from "./leftbar.js";
import { Projects, storeProject, getAllProjects } from "./core.js";

const bg = document.getElementById("bg");

let def = new Projects("default", "Your default project");

let name = prompt("Enter your ToDo");

def.newToDo(name);

storeProject(def);

console.log(localStorage.length);
console.log("Projects : " + getAllProjects().toString());

displayProjects(getAllProjects());

bg.appendChild(leftBar);
