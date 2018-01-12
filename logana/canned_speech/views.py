from django.http import HttpResponse
from django.core import serializers

from logana.canned_speech.models import CannedSpeech
from logana.decorators import post_token_required
import json

def index(request):
    canneds = CannedSpeech.get_all_speech()
    print(serializers.serialize('json', canneds))
    return HttpResponse("Hello")

def get_titles(request):
    cannedss = CannedSpeech.get_speeches()
    print(cannedss)
    print(list(cannedss))
    return HttpResponse("Hello2")

def get_canned(request, title):
    print("REQ: " + title)
    canned = CannedSpeech.get_title(title)
    return HttpResponse(canned.get_speech())

@post_token_required
def set_canned(r):
    title = r.POST.get('title')
    print(title)
    return HttpResponse("HELLO!")