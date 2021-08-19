from django.urls import path

from . import views

urlpatterns = [
      # ex: http://127.0.0.1:8000/polls/
    path('', views.index, name='index'),
    # ex: http://127.0.0.1:8000/polls/5/
    path('suma/', views.suma, name='suma'),
    # ex: http://127.0.0.1:8000/polls//5/results/
    path('suma/<int:numero1>/', views.numero1, name='numero1'),
    # ex: http://127.0.0.1:8000/polls/5/vote/
    path('suma/<int:numero1>/<int:numero2>/', views.numero2, name='numero2'),


    path('resta/', views.resta, name='resta'),
    path('resta/<int:numero1>/<int:numero2>/', views.resta, name='numero2'),

    path('multiplicacion/', views.resta, name='resta'),
    path('multiplicacion/<int:numero1>/<int:numero2>/', views.multiplicacion, name='numero2'),
]
