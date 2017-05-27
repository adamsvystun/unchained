from channels import Group

# Connected to websocket.connect
def ws_add(message):
    # Accept the incoming connection
    message.reply_channel.send({"accept": True})
    # Add them to the chat group
    Group("chat").add(message.reply_channel)

# Connected to websocket.disconnect
def ws_disconnect(message):
    Group("chat").discard(message.reply_channel)