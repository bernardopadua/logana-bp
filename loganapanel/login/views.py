from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect

from loganapanel.decorators import post_token_required
from loganapanel.webapp import views as logana_views
from loganapanel.login.models import UserToken

def login(req):
    #userAuth = User(username="pimptech")
    if req.method == "POST" and req.POST != {}:
        user = authenticate(username=req.POST['username'], password=req.POST['password'])
        if user is not None:
            req.user = user

            check_user = UserToken.objects.filter(user=user)
            if len(check_user) > 0:
                check_user[0].generate_token()
                check_user[0].save()
            else:
                user_token = UserToken(user=req.user)
                user_token.generate_token()
                user_token.save()
            
            return logana_views.index(req)
        else:
            return render(req, 'webapp/login.html', {'message': 'Your login is wrong. Are you sure you have an account here ?'})

    return HttpResponse("<h1> - 404 - </h1>")

def logout(req):
    token = req.POST.get('token')

    if token != None:
        UserToken.delete_me(token)

    return redirect('/')