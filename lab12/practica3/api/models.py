from django.db import models


class Libro(models.Model):
    Libro = models.CharField(max_length=200,null=True)
    nombre = models.CharField(max_length=200,null=True)
    fechaInicio = models.DateTimeField(auto_now=False)
    fechaFin = models.DateTimeField(auto_now=False)

    def __str__(self):
       return self.Libro
        
