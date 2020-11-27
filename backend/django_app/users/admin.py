from django.contrib import admin
from .models import User



@admin.register(User)
class UserAdmin(admin.ModelAdmin):


    fields = [
        'first_name', 
        'last_name', 
        'email',
        'username',
        'password', 
        'position', 
        'speciality', 
        ('is_staff', 'is_active'), 
        'groups', 
        'user_permissions',
        ]
    list_display =[
        'email', 
        'username', 
        'first_name', 
        'last_name', 
        'last_login', 
        'position', 
        'speciality'
        ]
    list_filter = ['position', 'speciality']
    readonly_fields = ['last_login', 'date_joined']