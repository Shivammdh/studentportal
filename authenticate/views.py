from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout, update_session_auth_hash 
from django.contrib.auth.forms import UserCreationForm, UserChangeForm, PasswordChangeForm
from django.contrib import messages 
from .forms import SignUpForm, EditProfileForm
from django.shortcuts import render
from django.shortcuts import redirect
from django.contrib.auth import REDIRECT_FIELD_NAME, authenticate,login
from .models import Profile
from django.http import HttpResponse
from django.template import loader
import pdfkit
import io
# Create your views here.
def home(request):
	return render(request, 'authenticate/home.html', {})

def login_user (request):
	if request.method == 'POST': #if someone fills out form , Post it 
		username = request.POST['username']
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:# if user exist
			login(request, user)
			messages.success(request,('Youre logged in'))
			return redirect('home') #routes to 'home' on successful login  
		else:
			messages.success(request,('Error logging in'))
			return redirect('login') #re routes to login page upon unsucessful login
	else:
		return render(request, 'authenticate/login.html', {})

def logout_user(request):
	logout(request)
	messages.success(request,('Youre now logged out'))
	return redirect('home')

def register_user(request):
	if request.method =='POST':
		form = SignUpForm(request.POST)
		if form.is_valid():
			form.save()
			username = form.cleaned_data['username']
			password = form.cleaned_data['password1']
			user = authenticate(username=username, password=password)
			login(request,user)
			messages.success(request, ('Youre now registered'))
			return redirect('home')
	else: 
		form = SignUpForm() 

	context = {'form': form}
	return render(request, 'authenticate/register.html', context)

def edit_profile(request):
	if request.method =='POST':
		form = EditProfileForm(request.POST, instance= request.user)
		if form.is_valid():
			form.save()
			messages.success(request, ('You have edited your profile'))
			return redirect('home')
	else: 		#passes in user information 
		form = EditProfileForm(instance= request.user) 

	context = {'form': form}
	return render(request, 'authenticate/edit_profile.html', context)
	#return render(request, 'authenticate/edit_profile.html',{})



def change_password(request):
	if request.method =='POST':
		form = PasswordChangeForm(data=request.POST, user= request.user)
		if form.is_valid():
			form.save()
			update_session_auth_hash(request, form.user)
			messages.success(request, ('You have edited your password'))
			return redirect('home')
	else: 		#passes in user information 
		form = PasswordChangeForm(user= request.user) 

	context = {'form': form}
	return render(request, 'authenticate/change_password.html', context)
def python(request):
	return render(request,'python.html')
def java(request):
	return render(request,'java.html')
def choice(request):
	return render(request,'choice.html')
def clang(request):
	return render(request,'clang.html')
def cpp(request):
	return render(request,'cpp.html')
def csharp(request):
	return render(request,'csharp.html')
def notes(request):
	return render(request,'notes.html')
def adminlogin(request):
    return render(request,'/admin/login/?next=/admin/')
def index1(request):
    return render(request,'page.html')
# def login(request):
#     return render(request,'login.html')

def accept(request):
    if request.method=="POST":
        name=request.POST.get("name","")
        phone=request.POST.get("phone","")

        email=request.POST.get("email","")
        school=request.POST.get("school","")
        degree=request.POST.get("degree","")
        university=request.POST.get("university","")
        skills=request.POST.get("skills","")
        about_you=request.POST.get("about_you","")
        profile=Profile(name=name,phone=phone,email=email,school=school,degree=degree,university=university,skills=skills,about_you=about_you)
        profile.save()

    
    return render(request, "accept.html")

def resume(request,id):
    user_profile=Profile.objects.get(pk=id)
    template=loader.get_template("resume.html")
    html=template.render({'user_profile':user_profile})
    option={
        'page-size':'Letter',
        'encoding':'UTF-8'
    }
    pdf=pdfkit.from_string(html,False,option)
    response=HttpResponse(pdf,content_type='application/pdf')
    response['Content-Disposition']='attachment'
    filename="resume.pdf"
    return response

def list(request):
    profile=Profile.objects.all()
    return render(request,"list.html",{'profile':profile})
def notes(request):
    return render(request,'to_do_main.html')
def snotes(request):
    return render(request,'addnotes.html')

