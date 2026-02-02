import './Search.css';
import type { Todo } from '../../types/Types';
import { useRef, useState } from 'react';

// LOGIC COMPONENT
const Search = () => {
    const searchText = useRef<HTMLInputElement>(null);
    const [ todoList, setTodoList ] = useState<Todo[]>([]);

    const handleSearch = () => {
        if (searchText.current) {
            const condition: string = searchText.current.value;
        }
    };

    return (

    );
};

export default Search;