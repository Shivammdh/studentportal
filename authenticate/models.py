from django.db import models

# Create your models here.


class Profile(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    skills = models.TextField(max_length=100)
    about_you= models.TextField(max_length=100)
    
    