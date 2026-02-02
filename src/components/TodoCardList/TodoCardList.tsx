import type { Todo } from '../../types/Types';
import TodoCard from '../TodoCard/TodoCard';

interface TodoCardListProps {
    todos: Todo[];
}

const TodoCardList = ({ todos }:TodoCardListProps) => {
    const listItems = todos.map(todo => {
        return (
            <TodoCard todo={todo} />
        );
    });

    return (
        <>{listItems}</>
    );
};

export default TodoCardList;