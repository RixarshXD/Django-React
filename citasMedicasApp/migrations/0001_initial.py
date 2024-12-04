# Generated by Django 5.0.2 on 2024-12-04 08:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Doctor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('rut', models.CharField(max_length=10)),
                ('fechaNacimiento', models.DateField()),
                ('especialidad', models.CharField(max_length=50)),
                ('correo', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Pacientes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('apellido', models.CharField(max_length=50)),
                ('rut', models.CharField(max_length=10)),
                ('fechaNacimiento', models.DateField()),
                ('correo', models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name='Cita',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fechaCita', models.DateTimeField()),
                ('diagnostico', models.CharField(max_length=50)),
                ('horaCita', models.TimeField()),
                ('motivo', models.CharField(max_length=50)),
                ('observacion', models.CharField(max_length=50)),
                ('doctor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='citasMedicasApp.doctor')),
                ('paciente', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='citasMedicasApp.pacientes')),
            ],
        ),
    ]