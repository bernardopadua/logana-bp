from django.http import HttpResponseBadRequest, HttpResponse
from loganapanel.login.models import UserToken

def check_cors():
    http_resp = HttpResponse("No permission!", status=200)
    http_resp['Access-Control-Allow-Origin'] = '*'
    http_resp['Access-Control-Allow-Methods'] = '*'
    http_resp['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
    return http_resp

def post_token_required(f):
    def wrap(request, *args, **kwargs):

        # CORS - non-simple request
        if(request.method == "OPTIONS"):
            return check_cors()

        req_token = request.POST.get('token')
        #print(req_token)
        #print(vars(request.POST))
        if (request.method == "POST") and (req_token != None):
            if UserToken.check_token(req_token) > 0:
                return f(request, *args, **kwargs)

        http_resp = HttpResponseBadRequest("No permission!")
        http_resp['Access-Control-Allow-Origin'] = '*'
        return http_resp

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap

def get_token_required(f):
    def wrap(request, *args, **kwargs):

        req_token = request.GET.get('token')
        if (request.method == "GET") and (req_token != None):

            if UserToken.check_token(req_token) > 0:
                return f(request, *args, **kwargs)

        http_resp = HttpResponseBadRequest("No permission!")
        http_resp['Access-Control-Allow-Origin'] = '*'
        return http_resp

    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap