from django.conf.urls import url
from loganapanel.canned_speech import views

urlpatterns = [
    url(r'^getall/$', views.index, name='canned_index'),
    url(r'^gettitles/$', views.get_titles, name='canned_titles'),
    url(r'^getcanned/(?P<title>.+)/$', views.get_canned, name='get_canned'),
    url(r'^setcanned/$', views.set_canned, name='set_canned'),
]