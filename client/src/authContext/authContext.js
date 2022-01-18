import {useReducer, createContext, useEffect} from 'react'
import AuthReducer from './AuthReducer'

const initial_state ={
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}
export const Context = createContext(initial_state)
export const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,initial_state)
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])
    return(
        <Context.Provider value={{...state,dispatch}}>{children}</Context.Provider>
    )
}


