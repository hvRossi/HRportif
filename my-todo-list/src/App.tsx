import React, { useEffect, useState } from 'react'
import AddTaskForm from './components/AddTaskForm'

type newTodoObjectProps = {
    id: number
    text: string
    completed?: boolean
}

const updateLocalStorage = (todos: newTodoObjectProps[]) =>
    localStorage.setItem("locStorTodos", JSON.stringify(todos));


function App() {

  const [todos, setTodos] = useState<newTodoObjectProps[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoEditingId, setTodoEditingId] = useState<number>();
  const [editingText, setEditingText] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault()
    if(!currentTodo) {
      alert("Please fill in the task!!!");
      return
    }

    const newTodoEntry = {
      id: new Date().getTime(),
      text: currentTodo,
      completed: false
    }

    const newTodo = [...todos, newTodoEntry]
    setTodos(newTodo)
    setCurrentTodo("")
    setTodoEditingId(undefined)
    updateLocalStorage(newTodo)
  }

  function deleteTodo(id: number) {
    const upDatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(upDatedTodos)
    updateLocalStorage(upDatedTodos)
  }

  function editTodo(id: number) {

    const itemToEdit = todos.findIndex((todo) => todo.id === id)
    if(itemToEdit === -1) return

    todos[itemToEdit].text = editingText

    const newTodos = [...todos]

    setTodos(newTodos)
    updateLocalStorage(newTodos)
    setTodoEditingId(0)
  }

  useEffect(() => {
    const storagedTodos = localStorage.getItem("locStorTodos")
    if(!storagedTodos) return

    const storagedIntoArray = JSON.parse(storagedTodos)
    if (storagedIntoArray) setTodos(storagedIntoArray);
  },[])

  return (
    <main>
      <AddTaskForm onHandleSubmit={handleSubmit} setInputValue={setCurrentTodo} inputValue={currentTodo} ></AddTaskForm>
      <section className="task-list">
        <h2>--- Task List ---</h2>
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
      </section>
    </main>
  )
}

export default App
