# app_movies/models.py
from django.db import models
from django.conf import settings


class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    trailer = models.URLField(blank=True)

def __str__(self):
        return self.title