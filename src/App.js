
import '../src/index.css'
import { useState } from 'react';
let globalID = 0;
function App() {
  function createTodo() {
    setTodos(oldTodos => {
      setTask('');
      return [...oldTodos, { todo: task, id: globalID++ }]
    })
  }
  function checkEnterKey(e) {
    if (e.keyCode === 13) {
      createTodo();
    }
  }
  function deleteItem(itemID) {
    setTodos(oldTodos => oldTodos.filter(item => item.id !== itemID));

  }
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  return (
    <div className="App flex flex-col h-screen  items-center ">
      <div>
        <h1 className='font-extrabold text-transparent lg:text-8xl text-6xl text-center my-4 bg-clip-text bg-gradient-to-r from-blue-400 to-red-600'>To Do App</h1>
        <div className='flex flex-row'>

          <input
            className="input input-bordered mt-4 w-full max-w-xs"
            type="text"
            placeholder="Input here"
            value={task}
            onChange={e => {
              setTask(e.target.value);

            }}
            onKeyDown={checkEnterKey}>

          </input>
          <button
            onClick={createTodo}
            className='btn btn-outline mx-4 mt-4'
          >Create To-Do</button>
        </div>
      </div>
      <div>
        <ul className='menu bg-base-100 lg:w-108 lg:px-16 px-2 text-3xl  w-screen rounded-box mt-8'>
          {todos.map(item => {
            return (
              <>
                <li key={item.id} className='bg-slate-800' >
                  <a>
                    {item.todo}
                    <span className='absolute lg:right-16 right-3 text-right	'
                      onClick={() => {
                        deleteItem(item.id)

                      }}>

                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </span>
                  </a>
                </li>
              </>
            )
          })}

        </ul>
      </div>
    </div>
  );
}

export default App;
