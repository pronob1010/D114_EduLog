from.serializers import UserSerializer
from rest_framework.viewsets import ModelViewSet
from . models import *

class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
