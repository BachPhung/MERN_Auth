import {useReducer, createContext} from 'react'
import AuthReducer from './AuthReducer'
const initial_state ={
    user:null,
    isFetching:false,
    error:false
}
export const Context = createContext(initial_state)
export const ContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,initial_state)
    return(
        <Context.Provider value={{...state,dispatch}}>{children}</Context.Provider>
    )
}


