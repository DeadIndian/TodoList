import akira from "../assets/Akira.png";
import titleImg from "../assets/title.png";

const ak = document.createElement("img");
ak.src = akira;
ak.style.height = "60%";
ak.style.marginTop = "35%";

const leftBar = document.createElement("div");
leftBar.id = "leftBar";
leftBar.style.height = "100%";

const lTitle = document.createElement("img");
lTitle.src = titleImg;
lTitle.style.maxWidth = "fit-content";
lTitle.style.maxHeight = "50%";

const listToDos = document.createElement("div");
listToDos.id = "ToDoList";

function displayProjects(list) {
	const listProjects = document.createElement("div");
	list.forEach((element) => {
		const project = document.createElement("button");
		project.textContent = element.name;
		project.onclick = updateScreen(element);
		listProjects.appendChild(project);
	});
	return listProjects;
}

function updateScreen(Project) {
	const ToDoList = document.getElementById("ToDoList");
	ToDoList.innerHTML = "";
	ToDoList.appendChild(displayToDos(Project.ToDos));
}

function displayToDos(list) {
	list.forEach((element) => {
		const ToDo = document.createElement("div");
		const title = document.createElement("h1");
		title.textContent = element.title;
		ToDo.appendChild(title);
		listToDos.appendChild(ToDo);
	});
	return listToDos;
}

leftBar.appendChild(lTitle);
console.log(leftBar);

export { ak, leftBar, displayProjects };
