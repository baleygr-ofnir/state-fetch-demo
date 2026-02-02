import type { Todo } from '../../types/Types';
import './TodoCard.css';

interface TodoCardProps {
    todo: Todo;
}

const TodoCard = ({ todo }: TodoCardProps) => {

    return (
        <div className="todoStyle">
            <h3>{todo.title}</h3>
            <p>{todo.id}</p>
        </div>
    );
};

export default TodoCard;