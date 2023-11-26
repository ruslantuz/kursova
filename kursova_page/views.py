from django.shortcuts import render

from kursova_page.models import Offers

# Create your views here.
def index(request):
    data = Offers.objects.all()
    return render(request, 'index.html', {'data': data})

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