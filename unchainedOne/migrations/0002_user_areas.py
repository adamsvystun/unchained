# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-27 21:21
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unchainedOne', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='areas',
            field=models.ManyToManyField(to='unchainedOne.Area'),
        ),
    ]
