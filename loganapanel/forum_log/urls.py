from django.conf.urls import url
from loganapanel.forum_log import views

urlpatterns = [
    url(r'create', views.create, name="createlog"),
    url(r'getlog', views.getlog, name="getlog"),
    url(r'getforum', views.get_forum, name="getforum"),
]