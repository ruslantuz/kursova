from django.db import models

# Create your models here.
class Offers(models.Model):
    location = models.CharField(max_length=255)
    rating = models.IntegerField()
    description = models.TextField()
    pricing = models.FloatField()

    def __str__(self):
        return self.location