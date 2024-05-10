import { useEffect, useReducer, useRef } from "react";
import ToDo from "./components/ToDo";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { todosReducer } from "./todosReducer";


const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos")) || [];

function App() {

    const addTodoTextareaRef = useRef();

    const [todos, dispatch] = useReducer(todosReducer, todosFromLocalStorage);

    function addTodo() {
        if (addTodoTextareaRef.current.value == "") return;
        dispatch({
            type: "ADD_TODO",
            payload: addTodoTextareaRef.current.value
        });
        addTodoTextareaRef.current.value = "";
    }

    function editTodo(id) {
        return (data) => {
            dispatch({
                type: "EDIT_TODO",
                payload: {id, ...data},
            });
        }
    }

    function deleteTodo(id) {
        return () => {
            dispatch({
                type: "DELETE_TODO",
                payload: id,
            })
        }
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <div className="wrapper">
            
            <h1>To-Do List</h1>

            <div className="todo-add">
                <TextareaAutosize ref={addTodoTextareaRef} placeholder="Add a new to-do" />
                <button onClick={addTodo}>+</button>
            </div>

            <hr />

            <div className="todos">

                {todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        {...todo}
                        editTodo={editTodo(todo.id)}
                        deleteTodo={deleteTodo(todo.id)}
                    />
                )}

            </div>
        
        </div>
    )
}

export default App;
