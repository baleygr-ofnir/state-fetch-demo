import type { Todo } from '../../types/Types';
import TodoCard from '../TodoCard/TodoCard';

interface TodoCardListProps {
    todos: Todo[];
}

const TodoCardList = ({ todos }:TodoCardListProps) => {
    const list = todos.map(todo => {
        return (
            <TodoCard todo={todo} />
        );
    });

    return (
        <>{list}</>
    );
};

export default TodoCardList;