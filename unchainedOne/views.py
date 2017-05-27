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
        #IF sqrt (lat-xCord)^2+(long-yCord)^2 <= radius THEN return Area.object
        areas = []
<<<<<<< HEAD
        for a in result.objects.all():
            areas.append({'id': a.id, 'area_name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        return JsonResponse(areas)

@csrf_exempt
def channels(request):
    if request.method == "GET":
        area = int(request.GET["pk"])

        resultArea = Area.objects.get(pk=area)
        channels_set = ()
        for c in resultArea.channel_set.all():
            channels_set.add(c)
        return JsonResponse(channels_set)


=======
        if lat and long:
            result = Area.objects.get(sqrt((lat-Area.xCord)^2+(long-Area.yCord)^2) <= Area.radius)
            for a in result.objects.all():
                areas.append({'id': a.id, 'area_name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        return JsonResponse({"areas": areas})
>>>>>>> 8db5c070add37f386319c440069c8b1c013f571d
