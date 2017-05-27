import { combineReducers } from "redux"

import areas from "./area"
import channels from "./channel"
import messages from "./message"
import user from "./user"

export default combineReducers({
    areas,
    channels,
    messages,
    user
})
