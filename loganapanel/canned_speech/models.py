from django.contrib.auth.models import User
from django.db import models

class CannedSpeech(models.Model):
    title       = models.CharField(max_length=255, null=False, unique=True)
    speech      = models.TextField(max_length=4000)
    create_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    create_date = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("title",)

    def __str__(self):
        return self.title

    def get_speech(self):
        return self.speech

    @staticmethod
    def get_all_speech():
        objs = CannedSpeech.objects.all()
        return objs

    @staticmethod
    def get_speeches():
        objs = CannedSpeech.objects.values('title')
        return objs

    @staticmethod
    def get_title(ptitle):
        objs = CannedSpeech.objects.get(title=ptitle)
        return objs