from django.db import models
from django.db.models.deletion import CASCADE
from django.template.defaultfilters import slugify

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
    designation = models.ForeignKey(Designation, on_delete=CASCADE)

    def __str__(self):
        return self.Member.username +" | "+self.Designation

class FAQ(models.Model):
    question = models.CharField(max_length=50, null=True, blank=True)
    answer = models.TextField(max_length=150, null=True, blank=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.question+"-"+str(self.id))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.question