from django.db import models

# Create your models here.
class Product(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField(blank=True)
    precio = models.IntegerField()
    
    def __str__(self):
        return self.nombre 