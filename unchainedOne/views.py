from django.http import HttpResponse, JsonResponse
from .models import *
from django.views.decorators.csrf import csrf_exempt
from math import sqrt

@csrf_exempt
def findArea(request):
    if request.method == "POST":
        print(request.POST)
        lat = float(request.POST.get("lat"))
        long = float(request.POST["long"])
        #IF sqrt (lat-xCord)^2+(long-yCord)^2 <= radius THEN return Area.object
        result = Area.objects.get(sqrt((lat-Area.xCord)^2+(long-Area.yCord)^2) <= Area.radius)
        areas = []
        for a in result.objects.all():
            areas.append({'id': a.id, 'area_name': a.area_name, 'xCord': a.xCord, 'yCord':a.yCord, 'radius':a.radius})
        return JsonResponse(areas)
