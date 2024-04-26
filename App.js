import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View } from 'react-native';

// Importa tus componentes aquí
import App from './App';
import Formulario from './formulario';
import Comunicaciones from './Comunicaciones';
import Camara from './Camara';

const Stack = createStackNavigator();

const MenuPrincipal = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Ver Mapa" onPress={() => navigation.navigate('Mapa')} />
      <Button title="Ver Formulario" onPress={() => navigation.navigate('Formulario')} />
      <Button title="Ver Comunicaciones" onPress={() => navigation.navigate('Comunicaciones')} />
      <Button title="Ver Cámara" onPress={() => navigation.navigate('Camara')} />
    </View>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MenuPrincipal">
        <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        <Stack.Screen name="Mapa" component={App} />
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Comunicaciones" component={Comunicaciones} />
        <Stack.Screen name="Camara" component={Camara} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
