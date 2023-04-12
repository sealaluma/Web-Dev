from django.urls import path
from . import views

urlpatterns = [
    path('', views.api, name='api'), #home page
    path("vacancies/", views.vacancies, name="vacancies"), # list of vacancies
    path('vacancies/<int:id>/', views.vacancy, name="vacancy"), #vacancy by id
    path("companies/", views.companies, name="companies"), # list of companies
    path("companies/<int:id>/", views.company, name="company"), #company by id
    path("companies/<int:id>/vacancies/", views.vacancies_by_company, name="vacancies_by_company"), #list of vacancies in this company
    path("vacancies/top_ten/", views.vacancies_top_ten, name="vacancies_top_ten") #List of top 10 vacancies sorted by decreasing salary
]
