from django.http import HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from math import sqrt
import json

@csrf_exempt
def findArea(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        print(data)
        lat = data.get("lat")
        long = data.get("long")
        if lat:
            lat = float(lat)
        if long:
            long = float(long)
        results = Area.objects.all()
        areas = []
        for a in results:
            if sqrt((lat - a.xCord) ** 2 + (long - a.yCord) ** 2) <= a.radius:
                areas.append({'id': a.id, 'area_name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        return JsonResponse(areas, safe=False)

@csrf_exempt
def channels(request):
    if request.method == "GET":
        area = int(request.GET["pk"])
        print(area)
        resultArea = Area.objects.get(pk=area)
        channels_set = []
        for c in resultArea.channel_set.all():
            channels_set.append({'id':c.id, 'channel_name':c.channel_name})
        return JsonResponse(channels_set, safe=False)

#websockets
