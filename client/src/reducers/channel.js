var initialState = []

export default function reducer(state=initialState, action){
    switch (action.type) {
        case "ADD_CHANNEl": {
            var new_channel = {
                id: action.payload.id,
                name: action.payload.name,
                area: action.payload.area
            }
            return [...state, new_channel]
        }
    }
    return state
}
