from django.urls import path
from .views import add_movie, get_movies, list_movies  # ← ici : ajoute list_movies

urlpatterns = [
    path('add-movie/', add_movie),
    path('api/movies/', get_movies),
    path('movies/', list_movies, name='list_movies'),
]
