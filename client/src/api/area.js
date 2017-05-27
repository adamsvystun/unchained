import axios from 'axios'

export function findArea({ lat, long}) {
    return axios.post('/findArea/', {
        lat: lat,
        long: long
    })
}

export function getUserAreas() {
    return axios.get('/getUserAreas/')
}
