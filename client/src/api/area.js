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

export function addUserArea({ area }) {
    return axios.post('/addUserArea/', {
        area: area
    })
}
