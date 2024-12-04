from rest_framework import serializers
from .models import Pacientes, Doctor, Cita

class PacientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pacientes
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'
        
class CitaSerializer(serializers.ModelSerializer):
    doctor_nombre = serializers.StringRelatedField(source='doctor')
    paciente_nombre = serializers.StringRelatedField(source='paciente')

    class Meta:
        model = Cita
        fields = '__all__'


        
