from django.db import models

class Area(models.Model):
    area_name = models.CharField(max_length=30)
    xCord = models.FloatField() #ELKA - 52.218953
    yCord = models.FloatField() #21.011846
    radius = models.FloatField() #52.218702|21.010661 = 0,001211291

    def __str__(self):
        return self.area_name

class Channel(models.Model):
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    channel_name = models.CharField(max_length=30)

    def __str__(self):
        return self.channel_name

class Message(models.Model):
    channel = models.ForeignKey(Channel, on_delete=models.CASCADE)
    user = models.CharField(max_length=20)
    pub_date = models.DateTimeField('date publised')
    text = models.CharField(max_length=200)
