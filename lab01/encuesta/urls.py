from django.urls import path

from . import views

urlpatterns = [
   # ex: http://127.0.0.1:8000/polls/
    path('', views.index, name='index'),
    # ex: http://127.0.0.1:8000/polls/5/
    path('<int:pregunta_id>/', views.detalle, name='detail'),
    # ex: http://127.0.0.1:8000/polls//5/results/
    path('<int:pregunta_id>/results/', views.resultados, name='results'),
    # ex: http://127.0.0.1:8000/polls/5/vote/
    path('<int:pregunta_id>/vote/', views.votar, name='vote'),

]
