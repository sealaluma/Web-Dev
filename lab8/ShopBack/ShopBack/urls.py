from django.contrib import admin
from django.urls import path, include
from api.views import products, product, categories, category, products_by_category

urlpatterns = [
    path("products/", products, name="products"), # list of products
    path('products/<int:id>/', product, name="product"), #product by id
    path("categories/", categories, name="categories"), # list of categories
    path("categories/<int:id>/", category, name="category"), #category by id
    path("categories/<int:id>/products/", products_by_category, name="products_by_category"), #list of products in this category
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]