import store from '../store'
import { addMessage } from '../actions/message'
var wsocket;

export function openChannel(id){
    console.log("[socket] Opening channel "+id)
    var fetched = false
    wsocket = new WebSocket("ws://"+ window.location.host +"/websocket/"+id)

    wsocket.onmessage = e => {
        let data = JSON.parse(e.data);
        switch (data.type) {
            case "addMessage": {
                store.dispatch(addMessage(data.message));
                break
            }
            case "fetchMessages": {
                if(!fetched){
                    console.log("[socket] Fetching messages",data)
                    data.messages.forEach((o)=>{
                        store.dispatch(addMessage(o))
                    })
                    fetched = true
                }
                break
            }
        }
    }
}

export function closeChannel(){
    console.log("[socket] Closing channel")
     wsocket.close()
}

export function sendMessage({ text, user, pub_date, channel, user_id}) {
    console.log("[socket] Sending message")
    wsocket.send(JSON.stringify({
        type: "addMessage",
        message: {
            text: text,
            user: user,
            user_id: user_id,
            pub_date: pub_date,
            channel: channel
        }
    }))
}
