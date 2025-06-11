from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Movie

@csrf_exempt
def add_movie(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        title = data.get('title')
        description = data.get('description', '')

        if title:
            Movie.objects.create(title=title, description=description)
            return JsonResponse({'message': 'Film ajouté avec succès !'}, status=201)
        else:
            return JsonResponse({'error': 'Le titre est requis'}, status=400)

    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
