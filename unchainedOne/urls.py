from django.conf.urls import url


from . import views

app_name = 'unchainedOne'
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^area/', views.index, name='index'),
    url(r'^findArea/$', views.findArea, name='findArea'),
    url(r'^channels/$', views.channels, name='channels'),
    url(r'^getUser/$', views.getUser, name='getUser'),
    url(r'^addUserArea/$', views.addUserArea, name='addUserArea'),
]
