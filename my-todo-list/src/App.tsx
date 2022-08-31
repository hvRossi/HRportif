import React, { useEffect, useState } from 'react'

const updateLocalStorage = (todos: string[]) =>
    localStorage.setItem("locStorTodos", JSON.stringify(todos));


function App() {

  const [todos, setTodos]: newTodoObjectProps | any = useState<newTodoObjectProps[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [todoEditingId, setTodoEditingId] = useState<number>();
  const [editingText, setEditingText] = useState("");

  type newTodoObjectProps = {
    id: Date
    text: string
    completed?: boolean
  }

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
    setTodos([...todos, newTodoEntry])
    setCurrentTodo("")
    setTodoEditingId(undefined)
    updateLocalStorage(newTodo)
  }

  function deleteTodo(id: number) {

    const upDatedTodos = [...todos].filter((todo) => todo.id !== id)
    const newTodos = upDatedTodos
    setTodos(upDatedTodos)
    updateLocalStorage(newTodos)
  }

  function editTodo(id: number) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo
    })
    const newTodos = updatedTodos
    setTodos(updatedTodos)
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
      <form id="new-task-form" onSubmit={handleSubmit} >
        <input type="text" id="new-task-input" placeholder="what's your task?" onChange={(e) => setCurrentTodo(e.target.value)} value={currentTodo} />
        <input type="submit" id="new-task-submit" value="Add task" />
      </form>
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
