export type newTodoObjectProps = {
    id: number
    text: string
    completed?: boolean
}

const TaskItem = ({ todos, todoEditingId, setEditingText, editingText, editTodo, deleteTodo, setTodoEditingId }: {
    todos: newTodoObjectProps[]
    todoEditingId: number | undefined
    setEditingText: React.Dispatch<React.SetStateAction<string>>
    editingText: string
    editTodo: (id: number) => void
    deleteTodo: (id: number) => void
    setTodoEditingId: React.Dispatch<React.SetStateAction<number | undefined>>

}) => {
    return (
        <div id="tasks">
            {todos.map((todo: { id: number, text: string; }) =>
                <div key={todo.id} className="task">
                    <div className="content">
                        {todoEditingId === todo.id ?
                            (
                                <input
                                    className='input-editing-text'
                                    type="text"
                                    onChange={(e) => setEditingText(e.target.value)}
                                    value={editingText}
                                />
                            )
                            :
                            (<div className='text'>{todo.text}</div>)}
                    </div>
                    <div className="actions">
                        {todoEditingId === todo.id ?
                            (
                                <button className="edit" onClick={() => editTodo(todo.id)}>Save</button>
                            )
                            :
                            (
                                <button className="edit" onClick={(e) => { setTodoEditingId(todo.id), setEditingText(todo.text) }}>Edit</button>
                            )
                        }
                        <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>
                </div>

            )}
        </div>
    )
}

export default TaskItem