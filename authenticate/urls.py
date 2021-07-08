from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name ="home"),
    path('login/', views.login_user, name ='login'),
    path('logout/', views.logout_user, name='logout'),
    path('register/', views.register_user, name='register'),
    path('edit_profile/', views.edit_profile, name='edit_profile'),
    path('change_password/', views.change_password, name='change_password'),
    path('choice/',views.choice,name='choice'),
    path('python/',views.python,name='python'),
    path('java/',views.java,name='java'),
    path('clang/',views.clang,name='clang'),
    path('cpp/',views.cpp,name='cpp'),
    path('c#/',views.csharp,name='c#'),
    path('notes/',views.notes,name='notes'),
    path(r'^admin/login/?$',views.adminlogin,name='adminlogin'),
    path('accept/',views.accept,name='accept'),
    path('<int:id>/',views.resume,name="resume"),
    path('list/',views.list,name='list'),
    path('snotes/',views.snotes,name='snotes'),
    
]

