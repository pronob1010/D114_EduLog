from django.contrib import admin
from . models import *

admin.site.register(Rating)
admin.site.register(CourseBaseCategory)
admin.site.register(CourseEnrollment)


class CourseTagsAdmin(admin.TabularInline):
    model = CourseTags
    exclude = ('slug',)

class PrerequisiteAdmin(admin.StackedInline):
    model = Prerequisite

class WillLearnAdmin(admin.StackedInline):
    model = WillLearn

class LessonAdmin(admin.StackedInline):
    model = Lesson
    exclude = ('slug',)


class VideoAdmin(admin.StackedInline):
    model = Video
    exclude = ('slug',)


class CourseAdmin(admin.ModelAdmin):
    inlines = [PrerequisiteAdmin, CourseTagsAdmin, WillLearnAdmin, LessonAdmin, VideoAdmin]

admin.site.register(Course, CourseAdmin)

class ChoiceInline(admin.TabularInline):
    model = TestChoice
    
class TestAdmin(admin.ModelAdmin):
    model = Test
    inlines = [ChoiceInline,]

admin.site.register(Test, TestAdmin)

