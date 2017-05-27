import store from '../store'
import { addMessage } from '../actions/message'

let wsocket = new WebSocket("ws://"+ window.location.host +"/websocket/1")
console.log(wsocket)
wsocket.onopen = onOpen
wsocket.onerror = onError

function onOpen(e) {
    console.log(e)
}
function onError(e) {
    console.log(e)
}
export function send(msg) {
    wsocket.send(msg)
}
export function sendMessage({ text, user, pub_date, channel}) {
    wsocket.send(JSON.stringify({
        type:"addMessage",
        message: {
            text: text,
            user: user,
            pub_date: pub_date,
            channel: channel
        }
    }))
}

wsocket.onmessage = e => {
    let data = JSON.parse(e.data);
    switch (data.type) {
        case "addMessage": {
            store.dispatch(addMessage(data.message));
            break
        }
        case "fetchMessages": {
            data.messages.forEach((o)=>{
                addMessage(o)
            })
            break
        }
    }
}
