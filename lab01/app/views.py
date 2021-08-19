from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse

def index(request):
    return HttpResponse("Desde la visa de app!")
##########suma############
def suma(request):
    return HttpResponse("Bienvenido a la suma")

def numero1(request,numero1 ):
    response = "La suma de  %s." 
    return HttpResponse(response % numero1)

def numero2(request,numero1 , numero2 ):
    resultado = numero1 + numero2
   
    return HttpResponse("La suma de  " + str(numero1) + " + " + str(numero2) + " = " "%s." % resultado)

##########resta############
def resta(request):
    return HttpResponse("Bienvenido a la resta")

def resta(request,numero1 , numero2 ):
    resultado = numero1 - numero2
   
    return HttpResponse("La resta de  " + str(numero1) + " - " + str(numero2) + " = " "%s." % resultado)



##########multiplicacion############

def multiplicacion(request):
    return HttpResponse("Bienvenido a la multiplicacion")

def multiplicacion(request,numero1 , numero2 ):
    resultado = numero1 * numero2
   
    return HttpResponse("La multiplicacion de  " + str(numero1) + " * " + str(numero2) + " = " "%s." % resultado)
