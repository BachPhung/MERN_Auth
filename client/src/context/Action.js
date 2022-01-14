export const addNote = (note) => {
    return({
        type:'ADD_NOTE',
        payload:note
    })
}

export const setInput = (e) => {
    return({
        type:'SET_INPUT',
        payload:e
    })
}