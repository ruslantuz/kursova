# Generated by Django 4.2.6 on 2023-12-18 18:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kursova_page', '0006_alter_offers_description_alter_offers_pricing_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='offers',
            name='rating',
            field=models.IntegerField(max_length=1),
        ),
    ]