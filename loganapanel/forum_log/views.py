#Components
from loganapanel.decorators import post_token_required, get_token_required
from django.http import HttpResponse
from django.core import serializers
import json

#Models
from loganapanel.forum_log.models import (
    Forum,
    Tool,
    LogManager
)
from loganapanel.login.models import UserToken

def http_res_json(json, stcode):
    res = HttpResponse(json, content_type='application/json', status=stcode)
    res['Access-Control-Allow-Origin'] = '*'
    return res

@post_token_required
def create(req):
    def get_field(field):
        return req.POST.get(field)

    #Fields
    token      = get_field('token')
    #tool      = get_field('tool')
    title      = get_field('title')
    forum_user = UserToken.getuser(token)
    url        = get_field('url')
    forum      = get_field('forum')

    #Get model row
    forum = Forum.objects.filter(id=forum)[0]

    newlog = LogManager(
                title=title, 
                forum_user=forum_user,
                url=url,
                forum=forum,
                create_user=forum_user)

    ret_json = {}

    stcode = 200 # Request OK

    try:
        newlog.save()
        ret_json = serializers.serialize('json', LogManager.objects.filter(pk=newlog.pk))
        #ret_json['testing_one'] = 'agsyuagsauygs'
        #ret_json = json.dumps(ret_json)
    except Exception as e:
        stcode = 500 # Server error
        ret_json['error'] = str(e)
        ret_json = json.dumps(ret_json)
        

    return http_res_json(ret_json, stcode)

@get_token_required
def getlog(req):
    
    pk = req.GET.get('pk')

    if pk != None:
        logrow = LogManager.objects.filter(pk=pk)
    else:
        logrow = LogManager.objects.all()

    stcode = 200
    if len(logrow) > 0:
        ret_json = serializers.serialize('json', logrow)
    else:
        stcode = 500
        ret_json = {
            "error": 'No log to show!'
        }
        ret_json = json.dumps(ret_json)

    return http_res_json(ret_json, stcode)

@get_token_required
def get_forum(req):
    
    forums = Forum.objects.all()

    stcode = 200
    ret_json = serializers.serialize('json', forums)

    return http_res_json(ret_json, stcode)
