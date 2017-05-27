from channels import Group
from channels.sessions import channel_session
import json

# Connected to websocket.connect
@channel_session
def ws_connect(message):
    message.reply_channel.send({"accept": True})
    room = message.content['path'].rsplit('/', 1)[-1]
    message.channel_session['room'] = room
    text = json.dumps({"type": 'fetchMesages', "messages": []})
    Group("chat-%s" % room).add(message.reply_channel)
    Group("chat-%s" % room).send({ #serve messages
        "text": text,
    })

# Connected to websocket.receive
@channel_session
def ws_message(message):
    Group("chat-%s" % message.channel_session['room']).send({
        "text": message['text'],
    })
    msg = json.loads(message['text'])
    if msg["type"] == "addMessage":
        print(msg) #save message

# Connected to websocket.disconnect
@channel_session
def ws_disconnect(message):
    Group("chat-%s" % message.channel_session['room']).discard(message.reply_channel)
