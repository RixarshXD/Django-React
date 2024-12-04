from django.db import models

# Create your models here.


# doctores
class Doctor(models.Model):
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    rut = models.CharField(max_length=10)
    fechaNacimiento = models.DateField()
    especialidad = models.CharField(max_length=50)
    correo = models.EmailField()
    
    def __str__(self):
        return f'{self.nombre} {self.apellido}'
   
   
# pacientes
class Pacientes(models.Model):
    nombre =models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    rut = models.CharField(max_length=10)
    fechaNacimiento = models.DateField()
    correo = models.EmailField()

    def __str__(self):
        return f'{self.nombre} {self.apellido}'
   
   
# citas medicas
class Cita(models.Model):
    fechaCita = models.DateTimeField()
    diagnostico = models.CharField(max_length=50)
    horaCita = models.TimeField()
    motivo = models.CharField(max_length=50)
    observacion = models.CharField(max_length=50)
        
    doctor = models.ForeignKey(Doctor, null=True, on_delete=models.CASCADE)
    paciente = models.ForeignKey(Pacientes, null=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'''{self.fechaCita} - {self.diagnostico} - {self.horaCita} - {self.motivo} - {self.observacion} - {self.doctor} - {self.paciente}'''
   
   
