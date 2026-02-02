import './Search.css';
import type { Todo } from '../../types/Types';
import { useRef, useState } from 'react';
import TodoSearch from '../../services/TodoService';
import TodoCardList from '../TodoCardList/TodoCardList';

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
        <>
            <div className="searchStyle">
                <input type="text" ref={searchText} />
                <button onClick={handleSearch}>Sök</button>
            </div>
            <TodoCardList todos={todoList} />
        </>
    );
};

export default Search;