from django.db import models
from django.db.models import query
from django.shortcuts import render
from rest_framework import serializers
from rest_framework.generics import ListAPIView, RetrieveAPIView
from.serializers import *
from rest_framework.viewsets import ModelViewSet

from . serializers import *
class CoueseViewSet(ModelViewSet):
    serializer_class = CourseSerializer
    queryset = Course.objects.all() 

# class CoueseListViewSet(ModelViewSet):
#     serializer_class = CourseListSerializer
#     queryset = Course.objects.all()

# class CoueseDetailsViewSet(ModelViewSet):
#     serializer_class = CourseDetailsSerializer
#     queryset = Course.objects.all()

class PrerequisiteViewSet(ModelViewSet):
    serializer_class = PrerequisiteSerializer
    queryset = Prerequisite.objects.all()

class RatingViewSet(ModelViewSet):
    serializer_class = RatingSerializer
    queryset = Rating.objects.all()


class CourseBaseCategoryViewSet(ModelViewSet):
    serializer_class = CourseBaseCategorySerializer
    queryset = CourseBaseCategory.objects.all()


