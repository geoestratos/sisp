# Generated by Django 3.1.1 on 2020-11-11 20:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clusters', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TrajectorySummary',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Date time on which the object was created', verbose_name='created')),
                ('modified', models.DateTimeField(auto_now=True, help_text='Date time on which the object was last    modified', verbose_name='modified')),
                ('trajectoryType', models.CharField(choices=[('Vertical', 'Vertical'), ('J', 'J'), ('S', 'S'), ('Horizontal', 'Horizontal')], default='Vertical', help_text='Determines which trajectory type is', max_length=10, verbose_name='Tipo de trayectoria')),
                ('actualDepth', models.FloatField(max_length=20, verbose_name='Profundidad actual')),
                ('finalDepth', models.FloatField(max_length=20, verbose_name='Profundidad final')),
                ('actualVDepth', models.FloatField(max_length=20, verbose_name='Profundidad actual')),
                ('finalVDepth', models.FloatField(max_length=20, verbose_name='Profundidad final')),
                ('actualInclination', models.FloatField(max_length=20, verbose_name='Inclinacion actual')),
                ('maxInclination', models.FloatField(max_length=20, verbose_name='Inclinacion maxima')),
                ('displacement', models.FloatField(max_length=20, verbose_name='Desplazamiento')),
                ('azimut', models.FloatField(max_length=20, verbose_name='Azimut')),
                ('well', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trajectory_summary', to='clusters.well', verbose_name='Pozo')),
            ],
            options={
                'ordering': ['-created', 'modified'],
                'get_latest_by': 'created',
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='TrajectoryData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(auto_now_add=True, help_text='Date time on which the object was created', verbose_name='created')),
                ('modified', models.DateTimeField(auto_now=True, help_text='Date time on which the object was last    modified', verbose_name='modified')),
                ('tvd', models.FloatField(max_length=10)),
                ('md', models.FloatField(max_length=10)),
                ('gridEast', models.FloatField(max_length=10, verbose_name='grid east')),
                ('gridNorth', models.FloatField(max_length=10, verbose_name='grid north')),
                ('well', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='trajectory_data', to='clusters.well', verbose_name='Pozo')),
            ],
            options={
                'ordering': ['-created', 'modified'],
                'get_latest_by': 'created',
                'abstract': False,
            },
        ),
    ]
