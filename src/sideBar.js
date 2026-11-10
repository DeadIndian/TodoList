import titleImg from "../assets/title.png";
import { createProject } from "./core.js";
import brush from "../assets/brush.png";
import addBtn from "../assets/addBtn.png";

const leftBar = document.createElement("div");
leftBar.id = "leftBar";

const lTitle = document.createElement("img");
lTitle.src = titleImg;
lTitle.style.maxWidth = "100%";
// lTitle.style.maxHeight = "50%";

const addProject = document.createElement("button");
addProject.className = "addProjectButton";
addProject.textContent = "Add Project";
addProject.style.backgroundImage = `url("${addBtn}")`;
addProject.onclick = () => createProject();

function highLight(a) {
	a.style.backgroundImage = `url("${brush}")`;
	console.log(brush);
}

function displayProjects(list) {
	const listProjects = document.createElement("div");
	let i = 0;
	list.forEach((element) => {
		const project = document.createElement("button");
		project.textContent = element.name;
		project.className = "projectButton";
		project.onclick = () => highLight(project);
		if (i === 0) {
			highLight(project);
			i++;
		}
		listProjects.appendChild(project);
	});
	leftBar.insertBefore(listProjects, addProject);
}

leftBar.appendChild(lTitle);

leftBar.appendChild(addProject);

export { leftBar, displayProjects };
