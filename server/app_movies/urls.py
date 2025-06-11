from django.contrib import admin
from django.urls import path
from app_movies.views import add_movie 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add-movie/', add_movie, name='add_movie'),
]
