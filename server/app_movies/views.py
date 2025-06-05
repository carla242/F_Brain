import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Movie

@csrf_exempt
def add_movie(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            title = data.get('title')
            description = data.get('description')
            
            Movie.objects.create(
                title=title,
                description=description    
            )
            return JsonResponse({'message': 'Film ajouté avec succès !'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)

def get_movies(request):
    if request.method == 'GET':
        movies = list(Movie.objects.values())
        return JsonResponse(movies, safe=False)

def list_movies(request):
    if request.method == "GET":
        movies = Movie.objects.all()
        data = [
            {"id": movie.id, "title": movie.title, "description": movie.description, "trailer": movie.trailer}
            for movie in movies
        ]
        return JsonResponse(data, safe=False)
