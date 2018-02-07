from django.contrib.auth.models import User
from django.db import models
from hashlib import sha256

class UserToken(models.Model):
    user              = models.ForeignKey(User, on_delete=models.CASCADE)
    token             = models.CharField(max_length=256, null=False)
    session_dt_active = models.DateTimeField(auto_now=True)

    def generate_token(self):
        uname = self.user.username.encode('utf-8')
        self.token = str(sha256(uname).hexdigest())
        return True
        
    def gettoken(self):
        return self.token

    @staticmethod
    def delete_me(ptoken):
        ut = UserToken.objects.filter(token=ptoken)
        if len(ut) > 0:
            ut[0].delete()

    @staticmethod
    def getuser(ptoken):
        ut = UserToken.objects.filter(token=ptoken)
        if len(ut) > 0:
            return ut[0].user

    @staticmethod
    def check_token(ptoken):
        return len(UserToken.objects.filter(token=ptoken))