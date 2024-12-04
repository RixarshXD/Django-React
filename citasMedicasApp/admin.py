from django.contrib import admin
from .models import Doctor, Pacientes, Cita 


# Register your models here.

class DoctorAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'rut', 'fechaNacimiento', 
                    'especialidad', 'correo')

class PacientesAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'rut', 'fechaNacimiento', 'correo')
    
class CitaAdmin(admin.ModelAdmin):
    list_display = ('fechaCita', 'diagnostico', 'horaCita', 'motivo', 
                    'observacion', 'doctor', 'paciente')
    
admin.site.register(Doctor, DoctorAdmin)
admin.site.register(Pacientes, PacientesAdmin)
admin.site.register(Cita, CitaAdmin)