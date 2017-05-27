from django.conf.urls import url


from . import views

app_name = 'unchainedOne'
urlpatterns = [
    url(r'^findArea$', views.findArea, name='findArea'),
]