import './Search.css';
import type { Todo } from '../../types/Types';
import { useRef, useState } from 'react';
import TodoSearch from '../../services/TodoService';

// LOGIC COMPONENT
const Search = () => {
    const searchText = useRef<HTMLInputElement>(null);
    const [ todoList, setTodoList ] = useState<Todo[]>([]);

    const handleSearch = () => {
        if (searchText.current) {
            const condition: string = searchText.current.value;

            TodoSearch(condition)
            .then(todos => setTodoList(todos));
        }
    };

    return (

    );
};

export default Search;