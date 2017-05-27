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
    room = message.content['path'].strip("/")
    message.channel_session['room'] = room
    last_messages = []
    now = timezone.now()
    messages = Message.objects.all()
    for m in messages:
        if (m.channel == int(room)) and (now - datetime.timedelta(hours=1) <= m.pub_date <= now):
            last_messages.append(m)

    text = json.dumps({"type": 'fetchMesages', "messages": last_messages})
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
        Message.objects.cre

# Connected to websocket.disconnect
@channel_session
def ws_disconnect(message):
    Group("chat-%s" % message.channel_session['room']).discard(message.reply_channel)
