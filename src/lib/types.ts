export type TodoData = {
	task: string;
	done: boolean;
};

export type TodoListData = {
	name: string;
	tasks: TodoData[];
};

export type TodoGroupData = {
	name: string;
	todos: TodoListData[];
};
