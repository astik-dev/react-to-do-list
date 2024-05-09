export function todosReducer (state, action) {
    
    switch (action.type) {

        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), isChecked: false, value: action.payload }
            ];
            
        case "DELETE_TODO":
            return state.filter(todo => todo.id != action.payload);

        case "EDIT_TODO":
            return state.map(todo =>
                todo.id == action.payload.id
                    ? { ...todo, ...action.payload }
                    : todo
            );
    }
}
