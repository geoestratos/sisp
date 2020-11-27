from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    """User model.
    Extends from Abstract User, change the 
    username field to email, and add some extra fields"""
    email = models.EmailField(
        'Email', 
        unique=True,
        error_messages={
            'unique':'This email already exists.'
            }
        )
    position = models.CharField(
        'Puesto', 
        max_length=40, 
        blank=True, 
        null=True
        )
    speciality = models.CharField(
        'Especialidad', 
        max_length=40, 
        blank=True, 
        null=True
        )
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['username']

    class Meta:
        verbose_name='Usuario'
        verbose_name_plural='Usuarios'