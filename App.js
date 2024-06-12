import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';

import { HomePage } from './src/pages/Home';
import { RegisterPage } from './src/pages/Register';
import { LoginPage } from './src/pages/Login';

const Tab = createBottomTabNavigator();

function TabBarNavidation({ state, descriptors, navigation }) {
  if (state.routes[state.index].name === 'Login') {
    return null; // Ocultar a barra de navegação na página de login
  }

  return (
    <View style={{
      flexDirection: "row",
      height: 60,
      borderTopStartRadius: 25,
      borderTopEndRadius: 25
    }}>
      {state.routes.map((route, index) => {
        if (route.name === 'Login' && state.index !== index) {
          return null; // Ocultar a aba de login nas outras páginas
        }

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              
            }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Login' tabBar={props => <TabBarNavidation {...props} />}>
        <Tab.Screen name='Login' component={LoginPage} options={{ tabBarStyle: { display: 'none' } }} />
        <Tab.Screen name='Inicio' component={HomePage} />
        <Tab.Screen name='Cadastro' component={RegisterPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
