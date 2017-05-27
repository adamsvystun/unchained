var initialState = [{
    id: 1,
    text: "Hello",
    user: "adam",
    pub_date: Date.now(),
    channel: 1
}]

export default function reducer(state=initialState, action){
    switch (action.type) {
        case "ADD_MESSAGE": {
            var new_message = {
                text: action.payload.text,
                user: action.payload.user || "Annonymous",
                pub_date: action.payload.pub_date,
                channel: action.payload.channel
            }
            return [...state, new_message]
        }
    }
    return state
}
