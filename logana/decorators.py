from django.http import HttpResponseBadRequest
from logana.apps import LogAnalysisApiConfig

def post_token_required(f):
    def wrap(request, *args, **kwargs):
        if (request.method != "POST") and (request.POST.get('token') != LogAnalysisApiConfig.token):
            return HttpResponseBadRequest()

        return f(request, *args, **kwargs)

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap