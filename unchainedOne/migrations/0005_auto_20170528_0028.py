# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-28 00:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('unchainedOne', '0004_auto_20170528_0026'),
    ]

    operations = [
        migrations.AddField(
            model_name='message',
            name='user_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='message',
            name='user',
            field=models.CharField(max_length=20),
        ),
    ]
