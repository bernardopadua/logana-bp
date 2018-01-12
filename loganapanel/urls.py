from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^getcanned/', views.getCanneds, name='getcanned'),
    url(r'^canneds/', include('loganapanel.canned_speech.urls')),
]