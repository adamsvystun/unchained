import axios from 'axios'

export function getChannels({ area }) {
    return axios.get('/channels/?area='+area)
}
