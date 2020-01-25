from django.db import models


class Task(models.Model):
    ez_important = models.BooleanField(default=False)
    ez_urgent = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    time_create = models.BigIntegerField(default=0)
    time_update = models.BigIntegerField(default=0)
    short_description = models.CharField(max_length=1000)
    long_description = models.CharField(max_length=2500)
