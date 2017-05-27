import { getChannels } from '../api/channel'
import { addUserArea } from '../api/area'
import { addChannel } from './channel'

export function addArea(area){
    return {
        type: "ADD_AREA",
        payload: area
    }
}

export function addAreaFetchChannels(area) {
    return dispatch => {
        dispatch(addArea(area))
        getChannels({area: area.id}).then((res)=>{
            res.data.forEach((val) => {
                dispatch(addChannel(val))
            });
        })
    };
}

export function addUserAreaAsync(area) {
    return dispatch => {
        dispatch(addArea(area))
        getChannels({area: area.id}).then((res)=>{
            res.data.forEach((val) => {
                dispatch(addChannel(val))
            });
        })
        addUserArea({area: area.id}).then((res)=>{
            console.log(res)
        })
    };
}
