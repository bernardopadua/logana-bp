from django.contrib.auth.models import User
from django.db import models

class Forum(models.Model):
    title = models.CharField(max_length=255, null=False, unique=True)
    url   = models.CharField(max_length=300, null=False, unique=True)

class LogManager(models.Model):
    S_OPEN   = "O"
    S_CLOSED = "C"
    S_WUSER  = "W" #Wainting user
    S_TCLOSED= "T" #Temporary close
    
    STATUS = (
        (S_OPEN, "Open"),
        (S_CLOSED, "Closed"),
        (S_WUSER, "Waiting for User"),
        (S_TCLOSED, "Temporary Closed"),
    )
    
    title       = models.CharField(max_length=255, null=False, unique=True)
    forum_user  = models.CharField(max_length=255)
    url         = models.CharField(max_length=300, null=False, unique=True)
    status      = models.CharField(max_length=1, choices=STATUS, default=S_OPEN)
    notes       = models.TextField(max_length=4000)
    forum       = models.ForeignKey(Forum, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now=True)
    create_user = models.ForeignKey(User, on_delete=models.DO_NOTHING)

class LogActivities(models.Model):
    A_NEWPOST     = "N"
    A_LOGMODIFIED = "M" #LogManager modified
    A_EMPTY       = "E" 

    ACTIVITY_TYPE = (
        (A_NEWPOST, "New Post"),
        (A_LOGMODIFIED, "Log Modified"),
        (A_EMPTY, "Empty"),
    )

    log           = models.ForeignKey(LogManager, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=1, choices=ACTIVITY_TYPE, default=A_EMPTY)
    activity_date = models.DateTimeField(auto_now=True)