from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter

from . views import *

router = DefaultRouter()
router.register("course", CoueseViewSet, basename='course')
router.register("prerequisite", PrerequisiteViewSet, basename='prerequisite')

urlpatterns = [
    
]+ router.urls
