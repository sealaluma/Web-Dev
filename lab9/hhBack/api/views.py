from django.http import HttpResponse, JsonResponse
from api.models import Company, Vacancy

def api(request):
    return HttpResponse("Welcome to the HH-Back API")

def vacancies(request):
    vacancies = Vacancy.objects.all()
    data = {"vacancies": list(vacancies.values())}
    return JsonResponse(data)

def vacancy(request, id):
    vacancy = Vacancy.objects.get(id=id)
    data = {"vacancy": {
            "name": vacancy.name,
            "description": vacancy.description,
            "salary": vacancy.salary,
            "company": vacancy.company.name
        }}
    return JsonResponse(data)

def companies(request):
    companies = Company.objects.all()
    data = {"companies": list(companies.values())}
    return JsonResponse(data)

def company(request, id):
    company = Company.objects.get(id=id)
    data = {"company": {
            "id": id,
            "name": company.name,
            "description": company.description,
            "address": company.address}
            }
    return JsonResponse(data)

def vacancies_by_company(request, id):
    company = Company.objects.get(id=id)
    vacancies = Vacancy.objects.filter(company=company)
    data = {"vacancies": list(vacancies.values())}
    return JsonResponse(data)

def vacancies_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    data = {"Top 10 Vacancies": list(vacancies.values())}
    return JsonResponse(data)