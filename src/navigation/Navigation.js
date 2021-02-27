import React from 'react';
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { SearchScreen } from '../screen/SearchScreen';
import { MovieDetails } from '../screen/MovieDetails';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Accueil"
          component={SearchScreen}
          options={{
            headerTransparent: true,
            headerBackground: () => {
              null;
            },
            title: null,
          }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={MovieDetails}
          options={ ({ navigation, roote }) => ({
            handerleft: (props) => (
              <HeaderBackButton
                {...props}
                onPress={() => {
                  navigation.navigate("Accueil");
                }}
              />
            ),
            headerTransparent: true,
            headerBackground: () => {
              null;
            },
            title: null,
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
