import './styles.css'

import  SingleTodo from './SingleTodo';
import { Todo } from '../model'

export interface TodoListProps {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
   return (
    <div className="todos">
        {todos.map(todo => {
            return (
                <SingleTodo 
                    todo={todo}
                    todos={todos}
                    setTodos={setTodos}
                />
            )
        })}
    </div>
   )
}

export default TodoList