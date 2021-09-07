from django.db import models
from django.db.models.deletion import CASCADE
 

# Create your models here.
class SiteBanner(models.Model):
    caption = models.CharField(max_length=50)
    short_descripton = models.TextField(max_length=150)
    image = models.ImageField(upload_to="media/site", null= True, blank = True)
    
    class Meta:
        abstract = True

class SiteHomeBanner(SiteBanner):
    button_title = models.CharField(max_length=10)

class SiteAboutBanner(SiteBanner):
    button_title = models.CharField(max_length=10)
    button_link = models.URLField()

class Designation(models.Model):
    title = models.CharField(max_length=25)

    def __str__(self):
        return self.title

from accounts.models import *
class Official_Team(models.Model):
    Member = models.ForeignKey(User, on_delete=CASCADE)
    Designation = models.CharField(max_length=25, choices=Designation)

    def __str__(self):
        return self.Member.username +" | "+self.Designation