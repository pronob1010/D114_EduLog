# Generated by Django 3.0.8 on 2021-09-08 07:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0017_auto_20210908_1329'),
    ]

    operations = [
        migrations.AlterField(
            model_name='courseenrollment',
            name='Course',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='enrolled_course', to='courses.Course'),
        ),
    ]
