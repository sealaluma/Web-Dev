from django.urls import path
from . import views

urlpatterns = [
    path('', views.api, name='api'), #home page
    path("products/", views.products, name="products"), # list of products
    path('products/<int:id>/', views.product, name="product"), #product by id
    path("categories/", views.categories, name="categories"), # list of categories
    path("categories/<int:id>/", views.category, name="category"), #category by id
    path("categories/<int:id>/products/", views.products_by_category, name="products_by_category"), #list of products in this category
]
