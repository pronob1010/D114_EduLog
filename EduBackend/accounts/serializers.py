from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from.models import *
class UserSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
        extra_kwargs = {
            "password" : {"write_only" : True, "style":{"inpute_type":"password"}}
        }

    def create(self, validated_data):
        user = User.objects.create_user(
            email = validated_data['email'],
            username = validated_data['username'],
            firstname = validated_data['firstname'],
            lastname = validated_data['lastname'],
            password = validated_data["password"],
        )
        return user
