from django.http import HttpResponse
from django.template.loader import render_to_string

from .apps import LogAnalysisApiConfig
from loganapanel.ApiInterface.Trello import Trello

def index(req):
    html = render_to_string('wapp/index.html')
    return HttpResponse(html)

def getCanneds(req):
    tr = Trello()
    r = tr.getConfig()
    return HttpResponse(r)