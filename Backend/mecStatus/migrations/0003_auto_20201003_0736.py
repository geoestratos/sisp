# Generated by Django 3.1.1 on 2020-10-03 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mecStatus', '0002_auto_20200930_2035'),
    ]

    operations = [
        migrations.AddField(
            model_name='geocolumn',
            name='orderId',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='trstate',
            name='orderId',
            field=models.IntegerField(default=0),
        ),
    ]