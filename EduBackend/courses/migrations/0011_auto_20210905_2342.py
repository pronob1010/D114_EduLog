# Generated by Django 3.0.8 on 2021-09-05 17:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0010_auto_20210905_2022'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coursetags',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_tags', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_lesson', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='lesson',
            name='Lesson_Title',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='prerequisite',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_prerequisite', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='prerequisite',
            name='short_description',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='rating',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_rating', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='test',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_test', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='test',
            name='Lesson',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='lesson_test', to='courses.Lesson'),
        ),
        migrations.AlterField(
            model_name='video',
            name='Course',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='course_video', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='video',
            name='Lesson',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='lesson_video', to='courses.Lesson'),
        ),
        migrations.AlterField(
            model_name='willlearn',
            name='Course',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='course_willlearn', to='courses.Course'),
        ),
        migrations.AlterField(
            model_name='willlearn',
            name='short_description',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
