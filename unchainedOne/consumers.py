from channels import Group
from channels.sessions import channel_session
import json
from .models import *
from django.utils import timezone
import datetime


# Connected to websocket.connect
@channel_session
def ws_connect(message):
    message.reply_channel.send({"accept": True})
    room = message.content['path'].rsplit('/', 1)[-1]
    message.channel_session['room'] = room
    last_messages = []
    now = timezone.now()
    messages = Message.objects.all()
    print(now, messages)
    for m in messages:
        if (m.channel_id == int(room)) and (now - datetime.timedelta(hours=10) <= m.pub_date):
            last_messages.append({
                "text": m.text,
                "user": m.user,
                "user_id": m.user_id,
                "pub_date": m.pub_date.isoformat(),
                "channel": m.channel_id,
                'id': m.id
            })
    print(last_messages)
    text = json.dumps({"type": 'fetchMessages', "messages": last_messages})
    Group("chat-%s" % room).add(message.reply_channel)
    Group("chat-%s" % room).send({
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
        m = Message(channel_id=int(message.channel_session['room']), user=msg['message']['user'],
                    user_id=int(msg['message']['user_id']), pub_date=timezone.now(), text=msg['message']['text'])
        m.save()
    else:
        pass


# Connected to websocket.disconnect
@channel_session
def ws_disconnect(message):
    Group("chat-%s" % message.channel_session['room']).discard(message.reply_channel)
