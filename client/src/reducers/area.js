var initialState = [{
    id: 1,
    name: "PW"
}]

export default function reducer(state=initialState, action){
    switch (action.type) {
        case "ADD_AREA": {
            var new_area = {
                id: action.payload.id,
                name: action.payload.name
            }
            return [...state, new_area]
        }
    }
    return state
}
