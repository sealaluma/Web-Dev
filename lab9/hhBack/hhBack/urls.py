"""hhBack URL Configuration

The `urlpatterns` list routes URLs to  For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import vacancies, vacancy, companies, company, vacancies_by_company, vacancies_top_ten

urlpatterns = [
    path('admin/', admin.site.urls),
    path("vacancies/", vacancies, name="vacancies"), # list of vacancies
    path('vacancies/<int:id>/', vacancy, name="vacancy"), #vacancy by id
    path("companies/", companies, name="companies"), # list of companies
    path("companies/<int:id>/", company, name="company"), #company by id
    path("companies/<int:id>/vacancies/", vacancies_by_company, name="vacancies_by_company"), #list of vacancies in this company
    path("vacancies/top_ten/", vacancies_top_ten, name="vacancies_top_ten") #List of top 10 vacancies sorted by decreasing salary
]
