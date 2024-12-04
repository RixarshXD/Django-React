from django.shortcuts import render
from rest_framework import viewsets
from .serializer import PacientesSerializer, DoctorSerializer, CitaSerializer
from .models import Pacientes, Doctor, Cita
# Create your views here.

class PacientesViewSet(viewsets.ModelViewSet):
    queryset = Pacientes.objects.all()
    serializer_class = PacientesSerializer

class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer

class CitaViewSet(viewsets.ModelViewSet):
    queryset = Cita.objects.all()
    serializer_class = CitaSerializer