from pathlib import Path

SECRET_KEY = 'your-secret-key-here'
BASE_DIR = Path(__file__).resolve().parent.parent

INSTALLED_APPS = [
    'landing'  # Aplikasi yang Anda tambahkan
]

ROOT_URLCONF= 'landing.urls'
STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / '/static']  # Folder static harus ada di direktori proyek
ALLOWED_HOSTS = ['*']
DEBUG = True

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],  # Folder templates harus ada di direktori proyek
        'APP_DIRS': True,
    },
]
