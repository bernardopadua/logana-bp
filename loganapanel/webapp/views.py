from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

def index(req):
    if hasattr(req, 'user') and req.user.is_authenticated:
        return loganapanel(req)
    else:
        return render(req, 'webapp/login.html')

@login_required
def loganapanel(req, token=None):
    if token != None:
        return render(req,
                      'webapp/index.html',
                      {'token': token})

    return render(req, 'webapp/index.html')
