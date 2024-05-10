import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const ToDo = ({isChecked, value, editTodo, deleteTodo}) => {
    
    return (
        <div className="todo">
            <input
                type="checkbox"
                checked={isChecked}
                onChange={() => editTodo({isChecked: !isChecked})}
            />
            <TextareaAutosize
                value={value}
                onChange={(e) => editTodo({value: e.target.value})}
            />
            <button onClick={deleteTodo}>x</button>
        </div>
    )
};

export default ToDo;
