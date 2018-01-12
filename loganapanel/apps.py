from django.apps import AppConfig

class LogAnalysisApiConfig(AppConfig):
    name = 'loganapanel'
    token  = "blabla"

    def checkToken(self, token):
        if self.key == token:
            return True
        else:
            return False