from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('', views.index, name='expenses'),
    path('add-expense', views.add_expense, name='add-expenses'),
    path('edit-expense/<int:id>', views.expense_edit, name='expense_edit'),
    path('expense-delete/<int:id>', views.delete_expense, name='expense_delete'),
    path('search-expenses', csrf_exempt(views.search_expenses), name='search_expenses'),
]
