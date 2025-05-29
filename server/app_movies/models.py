# app_movies/models.py
from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    trailer = models.URLField(blank=True)
