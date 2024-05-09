import { TextareaAutosize } from "@mui/base/TextareaAutosize";

const ToDo = ({isChecked, value}) => {
    
    return (
        <div className="todo">
            <input type="checkbox" checked={isChecked}/>
            <TextareaAutosize value={value} />
        </div>
    )
};

export default ToDo;
