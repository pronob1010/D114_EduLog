from django.urls import path
from rest_framework import routers
from rest_framework.routers import DefaultRouter
from.views import *

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r"auth", UserViewSet)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
] + router.urls

