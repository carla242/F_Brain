# app_movies/urls.py
from django.urls import path
from .views import add_movie

urlpatterns = [
    path('add-movie/', add_movie),
]
