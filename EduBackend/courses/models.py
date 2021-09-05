from django.db import models
from django.db.models.deletion import CASCADE, SET_NULL
from django.db.models.expressions import F
from django.utils.translation import activate
from django.template.defaultfilters import default, slugify, title

class CourseBaseCategory(models.Model):
    Base_Category_Title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Base_Category_Title+"|"+str(self.id))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Base_Category_Title

from accounts.models import *
class Course(models.Model):
    user = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    Course_Base_Category = models.ForeignKey(CourseBaseCategory, on_delete=CASCADE, default=None)
    course_title = models.CharField(max_length=50)
    course_description = models.TextField(max_length=150, null=True, blank=True)
    course_price = models.PositiveIntegerField(null=False)
    course_discount_price = models.PositiveIntegerField(null=False)
    activate = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to ="media/Course/Thumbnail")
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)
    materials_link = models.URLField(null=True, blank=True)
    course_length = models.CharField(max_length=15, null=True, blank=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.course_title+"|"+str(self.id)+"|"+str(self.Course_Base_Category))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.course_title+" | "+self.Course_Base_Category.Base_Category_Title

class CourseTags(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None)
    Tags_Title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Tags_Title+"-"+self.Course.course_title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Tags_Title
class Prerequisite(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None)
    short_description = models.CharField(max_length=50)

class WillLearn(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE)
    short_description = models.CharField(max_length=50)

class Lesson(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None)
    Lesson_Title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Lesson_Title+"-"+self.Course.course_title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Lesson_Title

class Video(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None)
    Lesson = models.ForeignKey(Lesson, on_delete=CASCADE, default=None)
    Video_Title = models.CharField(max_length=50)
    Video_URL = models.URLField()
    is_Preview = models.BooleanField(default=False)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Video_Title+"|"+self.Lesson+"|"+self.Course)
        return super().save(*args, **kwargs)

class Test(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None)
    Lesson = models.ForeignKey(Lesson, on_delete=CASCADE, default=None)
    Question  = models.CharField(max_length=100)
    option_1 = models.CharField(max_length=50)
    option_2 = models.CharField(max_length=50)
    option_3 = models.CharField(max_length=50)
    option_4 = models.CharField(max_length=50)
    Correct_Answer = models.CharField(max_length=50)
    Time_In_Secound = models.PositiveIntegerField()


