from .httpreq import HttpReq
import json

#Interface with trello
class Trello:
    BASE_URL = "api.trello.com"
    BOARD_DB = "/1/board/s2nh9QCs/"

    KEY      = "9b3e1209b74b993c3e1b6442f2403f48"
    TOKEN    = "cdd0e63ec7ce67d6ec6d35a89ecb8341abe3e1ee62fc26f4f60b8a49bd51a4f2"

    def __init__(self):
        self.tablesId = {
            '{config}': '',
            '{speechs}': ''
        } #Store tables
        self.hq     = HttpReq(self.KEY, self.TOKEN, self.BASE_URL)

    def getConfig(self):
        self.hq.addParams("fields", "name")
        jsonObj = json.loads(self.hq.callApi("GET", self.BOARD_DB+"lists"))

        for lst in jsonObj:
            self.tablesId[lst['name']] = lst['id']
        
        jsonObj     = json.loads(self.hq.callApi("GET", "/1/lists/%s/cards"%self.tablesId['{config}']))
        masterCfgId = ""
        for lst in jsonObj:
            if lst['name'] == '{master}':
                masterCfgId = lst['id']
                break
        
        self.hq.addParams("fields", "desc")
        r = self.hq.callApi("GET", "/1/cards/%s"%masterCfgId)
        jsonObj = json.loads(r)

        return jsonObj['desc']
