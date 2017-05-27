import store from '../store'
import { addMessage } from '../actions/message'
var wsocket;

export function openChannel(id){
    console.log("[socket] Opening channel "+id)
    wsocket = new WebSocket("ws://"+ window.location.host +"/websocket/"+id)

    wsocket.onmessage = e => {
        let data = JSON.parse(e.data);
        switch (data.type) {
            case "addMessage": {
                store.dispatch(addMessage(data.message));
                break
            }
            case "fetchMessages": {
                console.log("[socket] Fetching messages",data)
                data.messages.forEach((o)=>{
                    store.dispatch(addMessage(o))
                })
                break
            }
        }
    }
}

export function closeChannel(){
    console.log("[socket] Closing channel")
     wsocket.close()
}

export function sendMessage({ text, user, pub_date, channel}) {
    wsocket.send(JSON.stringify({
        type: "addMessage",
        message: {
            text: text,
            user: user,
            pub_date: pub_date,
            channel: channel
        }
    }))
}
