from django.http import response
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Libro
from .serializers import LibroSerializer
# Create your views here.

@api_view(['GET'])
def index(request):
    return Response({'mensaje':'Api rest de asistencia'})

@api_view(['GET','POST'])
def libro(request):
    if request.method == 'GET':
        listaLibro = Libro.objects.all()
        serLibro = LibroSerializer(listaLibro,many=True)
        return Response(serLibro.data)
    elif request.method == 'POST':
        serLibro = LibroSerializer(data=request.data)
        if serLibro.is_valid():
            serLibro.save()
            return Response(serLibro.data)
        else:
            return Response(serLibro.errors)

@api_view(['GET','PUT','DELETE']) 
def librodetalle(request,libro_id):
    objLibro = Libro.objects.get(id = libro_id)

    if request.method == "GET":
        serLibro = LibroSerializer(objLibro)
        return Response(serLibro.data)
    elif request.method == "PUT":
        serLibro = LibroSerializer(objLibro,data = request.data)
        if serLibro.is_valid():
            serLibro.save()
            return Response(serLibro.data)
        else:
            return Response(serLibro.errors) 
    elif request.method == 'DELETE':
        objLibro.delete()
        return Response(status=204)
