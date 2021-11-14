from django.db import models
from rest_framework import serializers
from rest_framework.utils import field_mapping

from .models import Libro

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = '__all__'
