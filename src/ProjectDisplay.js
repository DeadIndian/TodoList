const ProjectDisplay = document.createElement("div");
ProjectDisplay.className = "pDisplay";

const listToDos = document.createElement("div");
listToDos.id = "Project";

function updateScreen(Projects) {
	Projects.forEach((element) => {
		const pTitle = document.createElement("h1");
		pTitle.textContent = element.name;
		const pDesc = document.createElement("h1");
		pDesc.textContent = element.desc;
		ProjectDisplay.appendChild(pTitle);
		ProjectDisplay.appendChild(pDesc);
	});
}

function displayToDos(list) {
	list.forEach((element) => {
		const ToDo = document.createElement("div");

		const title = document.createElement("h1");
		const desc = document.createElement("p");
		const checkBox = document.createElement("INPUT");
		checkBox.setAttribute("type", "checkbox");
		title.textContent = element.title;
		desc.textContent = element.desc;
		checkBox.checked = false;
		ToDo.appendChild(title);
		ToDo.appendChild(desc);
		ToDo.appendChild(checkBox);

		listToDos.appendChild(ToDo);
		ProjectDisplay.appendChild(listToDos);
	});
}

export { ProjectDisplay, updateScreen };
