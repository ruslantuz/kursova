from django.http import HttpResponseRedirect
from django.shortcuts import render
from kursova_page.models import Offers
from django.contrib import messages
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import cache_control
from .forms import AccountCreationForm

# Create your views here.
def index(request):
    data = Offers.objects.all()
    if request.method == "POST":
        form = AccountCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect("/")
        else:
            messages.error(request, form.errors, extra_tags="register")
    else:
        form = AccountCreationForm()

    return render(request, 'index.html', {'data': data, 'form': form})

@login_required(login_url="/login")
@cache_control(no_cache=True, must_revalidate = True, no_store = True)

def Login(request):
    if request.user.is_authenticated:
        username = request.user.username
        return render(request, 'user_page/index.html', {'username':username})

def LoginUser(request):
    if request.method == "POST":
        username = request.POST.get('username') 
        password = request.POST.get('password') 
        user = authenticate(username = username, password = password)
        if user != None:
            login(request, user)
            return HttpResponseRedirect("login/")
        else:
            messages.error(request, "Enter your data correctly.", extra_tags="login")
            return HttpResponseRedirect("/")

def LogOut(request):
    logout(request)
    request.user = None
    return HttpResponseRedirect("/")

def blogs(request):
    return render(request, 'blog_page/index.html')

def offers(request):
    return render(request, 'offer-page/index.html')

def blog_item(request, id):
    data = Offers.objects.all()
    return render(request, 'blog_page/index.html', {'data': data})

def offer_item(request, id):
    data = Offers.objects.get(id = id)
    return render(request, 'offer-page/index.html', {'data': data})
# Note: insert id of item in database inside a item link on main page, then use this method to render page based by id 