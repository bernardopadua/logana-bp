import http.client, urllib

class HttpReq:

    def __init__(self, key, token, url):
        self.queryParam = {
            'key'  : key,
            'token': token
        }        
        self.url = url
    
    def addParams(self, paramKey, paramValue):
        self.queryParam[paramKey] = paramValue
    
    def rmParam(self, paramKey):
        self.queryParam.pop(paramKey, None)

    def callApi(self, pType, url):
        self.setConn()

        params = urllib.parse.urlencode(self.queryParam)
        fUrl   = url + "?" + params
        a      = self.conn.request(pType, fUrl)

        r = self.conn.getresponse().read().decode("utf-8")
        self.conn.close()

        return r

    def setConn(self):
        self.conn = http.client.HTTPSConnection(self.url)