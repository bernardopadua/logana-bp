from django.apps import AppConfig

class LogAnalysisApiConfig(AppConfig):
    name = 'log_analysis_api'
    token  = "blabla"

    def checkToken(self, token):
        if self.key == token:
            return True
        else:
            return False