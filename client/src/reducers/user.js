var initialState = {}

export default function reducer(state=initialState, action){
    switch (action.type) {
        case "FETCH_USER": {
            return {...state, ...action.payload}
        }
    }
    return state
}
