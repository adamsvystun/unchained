from channels.routing import route
from unchainedOne.consumers import ws_add, ws_disconnect

channel_routing = [
    route("websocket.connect", ws_add),
    route("websocket.connect", ws_disconnect),
]