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
            console.log(action.payload)
        }
    }
    return state
}
