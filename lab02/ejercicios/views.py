from django.shortcuts import render

# Create your views here.

def operaciones(request):
    context = {
        'titulo' : 'Formulario',
    }
    return render(request, 'operaciones.html')

def respuesta(request):
    a = request.POST['n1']
    b = request.POST['n2']
    suma = int(a) + int(b)
    context = {
        'a' : a,
        'b' : b,
        'resultado' : suma

    }
    return render(request,'respuesta.html',context)