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
            self.slug = slugify(self.Base_Category_Title+"-"+str(self.id))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Base_Category_Title

from accounts.models import *
class Course(models.Model):
    instractor = models.ForeignKey(User, on_delete=SET_NULL, null=True, related_name="instractor")
    Course_Base_Category = models.ForeignKey(CourseBaseCategory, on_delete=CASCADE, default=None)
    course_title = models.CharField(max_length=50)
    course_description = models.TextField(max_length=150, null=True, blank=True)
    choice_list = (
        ('Beginner', 'Beginner'), 
        ('Intermediate', 'Intermediate'), 
        ('Expert', 'Expert'), 
        ('Any', 'Any'), 
    )
    level = models.CharField(max_length=15, choices=choice_list, null=True)
    course_price = models.PositiveIntegerField(null=False)
    course_discount_price = models.PositiveIntegerField(null=False)
    activate = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to ="media/Course/Thumbnail", null = True, blank=True)
    create_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)
    materials_link = models.URLField(null=True, blank=True)
    course_length = models.CharField(max_length=15, null=True, blank=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
        
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.course_title+"-"+str(self.id)+"-"+str(self.Course_Base_Category))
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.course_title+" | "+self.Course_Base_Category.Base_Category_Title


class CourseEnrollment(models.Model):   
    students = models.ManyToManyField(User, related_name="enrolled_student", null=True, blank=True)
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None,  related_name="enrolled_course", null=True, blank=True)
    enrollment_date = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return self.students.username + " | "+ self.Course.course_title

class CourseTags(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None,  related_name="course_tags")
    Tags_Title = models.CharField(max_length=50)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Tags_Title+"-"+self.Course.course_title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Tags_Title + self.Course.course_title

class Prerequisite(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None, related_name="course_prerequisite")
    short_description = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.short_description +"-"+self.Course.course_title

class WillLearn(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, related_name="course_willlearn")
    short_description = models.CharField(max_length=50, null=True)

    def __str__(self):
        return self.short_description +"-"+self.Course.course_title

class Lesson(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None, related_name="course_lesson")
    Lesson_Title = models.CharField(max_length=50, null=True)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Lesson_Title+"-"+self.Course.course_title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Lesson_Title + "-" + self.Course.course_title

class Video(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None,  related_name="course_video")
    Lesson = models.ForeignKey(Lesson, on_delete=CASCADE, default=None, related_name="lesson_video")
    Video_Title = models.CharField(max_length=50)
    Video_URL = models.URLField()
    is_Preview = models.BooleanField(default=False)
    slug = models.SlugField(unique=True, null=True, blank=True)
    
    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.Video_Title+"-"+self.Lesson.Lesson_Title+"-"+self.Course.course_title)
        return super().save(*args, **kwargs)

    def __str__(self):
        return self.Video_Title+"-"+self.Lesson.Lesson_Title+"-"+self.Course.course_title

class Test(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None, related_name="course_test")
    Lesson = models.ForeignKey(Lesson, on_delete=CASCADE, default=None, related_name="lesson_test")
    Question  = models.CharField(max_length=100)
    Time_In_Secound = models.PositiveIntegerField()
    point = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.Question +"-"+self.Lesson.Lesson_Title+"-"+self.Course.course_title

class TestChoice(models.Model):
    # Course = models.ForeignKey(Course, on_delete=CASCADE, default=None, null=True)
    Lesson = models.ForeignKey(Lesson, on_delete=CASCADE, default=None, null=True, related_name='lesson_choice')
    question = models.ForeignKey(Test, related_name='choice', on_delete=CASCADE)
    option_title = models.CharField(max_length=50)
    is_correct = models.BooleanField(default=False, null=False)

    def __str__(self):
        return self.option_title +"-"+self.question.Question+"-"
    

class Rating(models.Model):
    Course = models.ForeignKey(Course, on_delete=CASCADE, default=None, related_name="course_rating")
    student = models.ForeignKey(User, on_delete=SET_NULL, null=True)
    ratting_list = (
        ('1', '1'), 
        ('2', '2'), 
        ('3', '4'), 
        ('4', '4'), 
        ('5', '5'), 
    )
    rating = models.CharField(max_length=15, choices=ratting_list, null=True)
    comment = models.TextField(max_length=150, null=True, blank= True)
    block = models.BooleanField(default=False)

    def __str__(self):
        return self.rating +"-"+self.comment+"-"+self.student.username+self.Course.course_title