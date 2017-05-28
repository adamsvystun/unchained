from django.contrib import admin

from .models import *

class MessageInline(admin.TabularInline):
    model = Message
    extra = 3

class ChannelAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['channel_name']}),
    ]
    inlines = [MessageInline]
    search_fields = ['channel_name']

class ChannelInline(admin.TabularInline):
    model = Channel
    extra = 1
    show_change_link = True

class AreaAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['area_name']}),
        ('Area information', {'fields': ['area_name'], 'classes': ['collapse']}),
    ]
    inlines = [ChannelInline]
    list_display = ('area_name', 'xCord', 'yCord', 'radius')
    search_fields = ['area_name']

admin.site.register(Area, AreaAdmin)
admin.site.register(Channel, ChannelAdmin)
admin.site.register(Message)