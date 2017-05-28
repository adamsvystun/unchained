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
            var new_id = action.payload.id
            if(new_id){
                var message = state.find((o)=>{
                    return o.id == new_id
                })
                if(message){
                    break
                }
            }
            var new_message = {
                text: action.payload.text,
                user: action.payload.user || "Annonymous",
                pub_date: action.payload.pub_date,
                channel: action.payload.channel,
                id: new_id
            }
            return [...state, new_message]
        }
    }
    return state
}
