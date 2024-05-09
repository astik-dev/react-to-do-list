import ToDo from "./components/ToDo";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

function App() {

    return (
        <div className="wrapper">
            
            <h1>To-Do List</h1>

            <div className="todo-add">
                <TextareaAutosize placeholder="Add a new to-do" />
                <button>+</button>
            </div>

            <hr />

            <div className="todos">
                
                <ToDo isChecked={false} value="To do" />

            </div>
        
        </div>
    )
}

export default App;
