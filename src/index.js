import "./style.css";
import { leftBar, displayProjects } from "./sideBar.js";
import { Project, storeProject, getAllProjects } from "./core.js";
import { ProjectDisplay, updateScreen } from "./ProjectDisplay.js";

const bg = document.getElementById("bg");

let def = new Project("default", "Your default project");

let name = prompt("Enter your ToDo");

def.newToDo(name, "aaa");

storeProject(def);

updateScreen(getAllProjects());

console.log(localStorage.length);
console.log("Projects : " + getAllProjects().toString());

displayProjects(getAllProjects());

bg.appendChild(leftBar);

bg.appendChild(ProjectDisplay);
