from django.http import HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from math import sqrt
import json
from django.shortcuts import render

@csrf_exempt
def findArea(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
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
                areas.append({'id': a.id, 'name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        print(areas)
        return JsonResponse(areas, safe=False)

@csrf_exempt
def channels(request):
    if request.method == "GET":
        area = request.GET.get("area")
        if area:
            area = int(area)
        print(area)
        resultArea = Area.objects.get(pk=area)
        channels_set = []
        for c in resultArea.channel_set.all():
            channels_set.append({'id':c.id, 'name':c.channel_name, 'area': area})
        return JsonResponse(channels_set, safe=False)

@csrf_exempt
def getUser(request):
    if request.method == "GET":
        user = request.session.get('user')
        if not user:
            user = {
                "id": randomId(),
                "name": randomName()
            }
            request.session["user"] = user
        return JsonResponse(user, safe=False)

@csrf_exempt
def getUserAreas(request):
    if request.method == "GET":
        areaIds = request.session.get('areas', [])
        areaIds = list(set(areaIds))
        request.session['areas'] = areaIds
        areas = []
        for pk in areaIds:
            a = Area.objects.get(pk=pk)
            areas.append({'id': a.id, 'name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        return JsonResponse(areas, safe=False)

@csrf_exempt
def addUserArea(request):
    if request.method == "POST":
        data = json.loads(request.body.decode("utf-8"))
        areaId = data.get('area')
        if areaId:
            areaIds = request.session.get('areas', [])
            areaIds.append(areaId)
            request.session['areas'] = areaIds
            return JsonResponse({"status": "ok"}, safe=False)
        return JsonResponse({"status": "error"}, safe=False)

def index(request):
    return render(request, "app.html")
#websockets
