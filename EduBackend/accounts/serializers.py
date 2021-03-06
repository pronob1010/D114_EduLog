from django.db.models import fields
from rest_framework.serializers import ModelSerializer

from.models import *

from courses.models import CourseEnrollment

class EnrollSerializer(ModelSerializer):
    class Meta:
        model = CourseEnrollment
        fields = '__all__'
class UserSerializer(ModelSerializer):

    course_enrolled = EnrollSerializer(source="enrolled_student", many=True, read_only=True)
    class Meta:
        model = User
        # fields = ('__all__')
        exclude = ('is_active','is_staff','is_student','is_subadmin','is_superuser','user_permissions','groups')
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
