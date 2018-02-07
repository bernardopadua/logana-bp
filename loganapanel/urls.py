from django.conf.urls import url, include
from . import views
from loganapanel.webapp import views as wapp_views
from loganapanel.login import views as login_view

urlpatterns = [
    url(r'^$', wapp_views.index, name='index'),
    url(r'^login$', login_view.login, name='login'),
    url(r'^logout$', login_view.logout, name='logout'),
    url(r'^getcanned/', views.getCanneds, name='getcanned'),
    url(r'^canneds/', include('loganapanel.canned_speech.urls')),
    url(r'log/', include('loganapanel.forum_log.urls')),
]