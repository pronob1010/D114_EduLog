import nested_admin
from django.contrib import admin
from . models import *

admin.site.register(Rating)
admin.site.register(CourseBaseCategory)
admin.site.register(CourseEnrollment)


class CourseTagsAdmin(nested_admin.NestedStackedInline):
    model = CourseTags
    exclude = ('slug',)

class PrerequisiteAdmin(nested_admin.NestedStackedInline):
    model = Prerequisite

class WillLearnAdmin(nested_admin.NestedStackedInline):
    model = WillLearn

class LessonAdmin(nested_admin.NestedStackedInline):
    model = Lesson
    exclude = ('slug',)


class VideoAdmin(nested_admin.NestedStackedInline):
    model = Video
    exclude = ('slug',)
class ChoiceInline(nested_admin.NestedTabularInline):
    model = TestChoice
    
class TestAdmin(nested_admin.NestedTabularInline):
    model = Test
    inlines = [ChoiceInline,]

class CourseAdmin(nested_admin.NestedModelAdmin):
    inlines = [PrerequisiteAdmin, CourseTagsAdmin, WillLearnAdmin, LessonAdmin, VideoAdmin, TestAdmin]

admin.site.register(Course, CourseAdmin)



# admin.site.register(Test, TestAdmin)

