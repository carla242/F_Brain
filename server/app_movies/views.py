# app_movies/views.py
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
            trailer = data.get('trailer')

            Movie.objects.create(
                title=title,
                description=description,
                trailer=trailer
            )
            return JsonResponse({'message': 'Film ajouté avec succès !'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
