import { useReducer } from "react";
import { Context } from "./Context";
import { initialState, Reducer } from "./Reducer";

export const Provider = ({children})=>{
    const [state,dispatch] = useReducer(Reducer,initialState)
    return(
        <Context.Provider value={[state,dispatch]}>
            {children}
        </Context.Provider>
    )
}