from django.db import models
from django.db.models.deletion import CASCADE

from courses.models import CourseEnrollment
from accounts.models import User
class Payment(models.Model):
    order_id = models.CharField(max_length=50, null=False)
    payment_id = models.CharField(max_length=50, null=True)
    user = models.ForeignKey(User, on_delete=CASCADE, null=True)
    enrolled_course = models.ForeignKey(CourseEnrollment, null = True, on_delete=CASCADE)
    date = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=False)

