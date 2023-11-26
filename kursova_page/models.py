from django.db import models

# Create your models here.
class Offers(models.Model):
    location = models.CharField(max_length=255)
    rating = models.IntegerField()
    description = models.TextField()
    pricing = models.FloatField()
    offer_image = models.ImageField(null = True, blank=True, upload_to="images/")

    def __str__(self):
        return "id: " + str(self.id) + " - " + self.location