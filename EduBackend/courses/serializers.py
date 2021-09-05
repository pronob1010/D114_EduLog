from django.db.models import fields
from rest_framework.serializers import ModelSerializer
from . models import *

class PrerequisiteSerializer(ModelSerializer):
    class Meta:
        model = Prerequisite
        fields = "__all__"

class WillLearnSerializer(ModelSerializer):
    class Meta:
        model = WillLearn
        fields = "__all__"

class LessonSerializer(ModelSerializer):
    class Meta:
        model = Lesson
        fields = "__all__"

class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = "__all__"

class TestSerializer(ModelSerializer):
    class Meta:
        model = Test
        fields = "__all__"

class CourseSerializer(ModelSerializer):
    prerequisite = PrerequisiteSerializer(many=True, read_only=True)
    willlearn = WillLearnSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['Course_Base_Category', 'course_title', 'prerequisite', 'willlearn']
