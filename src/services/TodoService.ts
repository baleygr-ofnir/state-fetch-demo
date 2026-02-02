import type { Todo } from '../types/Types';

const TodoSearch = async (condition: string) => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    const todos: Todo[] = await fetch(url).then(response => response.json());

    return todos.filter(todo => todo.title.includes(condition));
};

export default TodoSearch;