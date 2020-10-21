from rest_framework import serializers
from appcmback.models import TblUsuario, Proyecto, Eventos, Materiales, MaterialesPrestados, Premio, PremiosObtenidos

class UsuarioSerializer (serializers.ModelSerializer):
    #owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = TblUsuario
        fields = '__all__'
        #fields = ('cedula', 'nombres', 'apellidos', 'username', 'email', 'telefono', 'usuario_activo')

    def create(self, validated_data):
        usuario = TblUsuario.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            nombres=validated_data['nombres'],
            apellidos=validated_data['apellidos'],
        )

        usuario.set_password(validated_data['password'])
        usuario.save()
        return usuario
    #def create(self, validated_data):
    #    usuario = TblUsuario.objects.create_user(**validated_data)

class ProyectoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Proyecto
        fields = '__all__'


class EventosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eventos
        fields = '__all__'


class MaterialesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materiales
        fields = '__all__'


class MaterialesPrestadosSerializer(serializers.ModelSerializer):
    class Meta:
        model = MaterialesPrestados
        fields = '__all__'


class PremiosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Premio
        fields = '__all__'


class PremiosObtenidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremiosObtenidos
        fields = '__all__'


