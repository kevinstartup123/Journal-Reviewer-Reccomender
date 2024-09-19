from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from landing.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('landing/', LandingPage),
    path('signin/', SignIn),
    path('signup/', SignUp),
    path('submit/', Submit),
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)