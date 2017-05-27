import store from '../store'

let wsocket = new WebSocket("ws://localhost:8000/channel/1")
console.log(wsocket)
wsocket.onopen = onOpen
wsocket.onerror = onError

store.dispatch({
    type: "ADD_MESSAGE",
    payload: {
        channel: 1
    }
})
function onOpen(e) {
    console.log(e)
}
function onError(e) {
    console.log(e)
}
export function send(msg) {
    wsocket.send(msg)
}

wsocket.onmessage = e => {
    let data = JSON.parse(e.data);
    console.log(data);
    switch (data.type) {
        case "addComment": {
            // store.dispatch();
            break
        }
    }
}
