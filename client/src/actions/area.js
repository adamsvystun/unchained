import { getChannels } from '../api/channel'
import { addChannel } from './channel'

export function addArea(area){
    return {
        type: "ADD_AREA",
        payload: area
    }
}

export function addAreaAsync(area) {
    return dispatch => {
        dispatch(addArea(area))
        getChannels({area: area.id}).then((res)=>{
            res.data.forEach((val) => {
                dispatch(addChannel(val))
            });
        })
    };
}
