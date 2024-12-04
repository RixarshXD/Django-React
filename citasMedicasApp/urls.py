from django.urls import path, include 
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from .views import PacientesViewSet, DoctorViewSet, CitaViewSet

router = routers.DefaultRouter()
router.register(r'pacientes', PacientesViewSet, 'pacientes')
router.register(r'doctor', DoctorViewSet, 'doctor')
router.register(r'cita', CitaViewSet, 'cita')

# api version
urlpatterns = [
    path('api/v1', include(router.urls)),
    path('docs/', include_docs_urls(title='Citas Medicas API'))    
]