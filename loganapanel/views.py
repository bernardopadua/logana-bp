from django.http import HttpResponse
from django.template.loader import render_to_string
from django.shortcuts import render, redirect

from .apps import LogAnalysisApiConfig
from loganapanel.ApiInterface.Trello import Trello

def index(req):
    if req.user.is_authenticated:
        return redirect('')
    else:
        return render(req, 'webapp/login.html')

def getCanneds(req):
    tr = Trello()
    r = tr.getConfig()
    return HttpResponse(r)