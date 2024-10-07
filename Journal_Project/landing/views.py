from django.shortcuts import render

# Create your views here.
def LandingPage(request):
    return render(request, 'landing.html')

def SignIn(request):
    return render(request, 'signin.html')

def SignUp(request):
    return render(request, 'signup.html')

def Submit(request):
    return render(request, 'submit.html')