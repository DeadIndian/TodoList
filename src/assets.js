import bgImg from "../assets/bg.jpg";

const listToDos = document.createElement("div");
listToDos.id = "ToDoList";

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

export { ak };
