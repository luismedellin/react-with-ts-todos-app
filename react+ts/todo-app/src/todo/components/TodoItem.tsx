import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos"
import { Todo } from "../interfaces/interfaces"

interface props {
    todo: Todo
}

export const TodoItem = ({ todo }: props) => {

    // const { toggleTodo } = useContext(TodoContext)
    const { toggleTodo } = useTodos();

    const handleDbClick = () => {
        console.log('handleDbClick', todo.desc);
        toggleTodo( todo.id )
    }

  return (
    <li style={{
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : ''
    }}

        onDoubleClick={ handleDbClick }>
        { todo.desc }
    </li>
  )
}
