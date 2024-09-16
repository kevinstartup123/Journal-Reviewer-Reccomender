from django.shortcuts import render

# Create your views here.

def home(request):
    
    return render(request, 'crm/index.html')

def signup(request):
    return render(request, 'crm/signup.html')

def index(request):
    return render(request, 'crm/index.html')