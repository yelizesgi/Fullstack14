


//? todoReducer type declaration
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TOOGLE_TODO = 'TOOGLE_TODO'
export const CLEAR_TODO = 'CLEAR_TODO'


//? action function declartion
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload//reducer a bilgi gönderileceği zaman kullanılır
})
export const clearTodo = () => ({ type: CLEAR_TODO })


export const deleteTodo = (payload) => ({
  type: DELETE_TODO, payload})

export const toogleTodo = (payload) => ({
  type: TOOGLE_TODO, payload})


//? baslangic durumlari
const initialState = {
    todoList: [
      { id: new Date().getTime(), text: "work redux", completed: true },
 
    ],
  }
  
  export const todoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TODO:
        return {
          todoList: [
            ...state.todoList,
            { id: new Date().getTime(), text: payload, completed: false },
          ],
        }
      

        case CLEAR_TODO:
          return initialState
    
        //TODO
        case DELETE_TODO:
          return {
            todoList: payload}
    
        //TODO
        case TOOGLE_TODO:
          return {
            todoList: payload}
    
      default:
        return state
    }
  }
  
