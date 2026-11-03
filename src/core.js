class ToDo {
	static counter = 0;
	constructor(title, desc) {
		this.id = ++ToDo.counter;
		this.title = title;
		this.desc = desc;
		this.isComplete = false;
	}

	flipStatus() {
		this.isComplete = !this.isComplete;
	}

	changeTitle(title) {
		this.title = title;
	}

	changeDesc(desc) {
		this.desc = desc;
	}

	setDueDate(dueDate) {
		this.dueDate = dueDate;
	}
}

class Projects {
	static list = [];
	constructor(name, desc) {
		this.name = name;
		this.desc = desc;
		this.todos = [];
		Projects.list.push(this);
	}

	newToDo(title, desc, dueDate) {
		const newToDo = new ToDo(title, desc, dueDate);
		this.todos.push(newToDo);
	}

	removeToDo(id) {
		this.todos.forEach((element) => {
			if (element.id === id) {
				this.todos.splice(this.todos.indexOf(element), 1);
			}
		});
	}

	getToDos() {
		return this.todos;
	}
}

function getAllProjects() {
	let a = [];
	Projects.list.forEach((element) => {
		let el = {
			name: element.name,
			ToDos: element.todos,
		};
		a.push(el);
	});
	return a;
}

function storeProject(project) {
	if (!localStorage.getItem("Projects")) {
		localStorage.setItem("Projects", JSON.stringify(Projects.list));
	} else {
		let p = JSON.parse(localStorage.getItem("Projects"));
		let a = -1;
		p.forEach((element) => {
			if (element.id === project.id) {
				a = element;
			}
		});
		if (a === -1) {
			p.push(project);
		} else {
			p[p.indexOf(a)] = project;
			localStorage.setItem("Projects", JSON.stringify(Projects.list));
		}
	}
}

export { ToDo, Projects, storeProject, getAllProjects };
