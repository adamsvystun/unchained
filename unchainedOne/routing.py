from channels.routing import route

channel_routing = [
    route("http.request", "unchainedOne.consumers.http_consumer"),
]