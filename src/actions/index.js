export const greetings = (name) => {
    return {
        type: "GREETINGS",
        payload: name,
    } 
}