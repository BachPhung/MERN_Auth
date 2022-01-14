import { useReducer } from "react";
export const initialState = {
    todos:[],
    todoInput:''
}
export const Reducer = (state,action) =>{
    switch(action.type){
        case 'ADD_NOTE':{
            return({
               todos: state.todos.concat(action.payload),
               todoInput:''
            })
        }
        case 'SET_INPUT':{
            return({
                todos:[...state.todos],
                todoInput:action.payload
            })
        }
        default:{
            return({...state})
        }
    }
}