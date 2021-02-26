import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Accuei"
        component={SearchedScreen}
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
        options={{
          handerleft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => {
                naviagte("Accueil");
              }}
            />
          ),
          headerTransparent: true,
          headerBackground: () => {
            null;
          },
          title: null,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default Navigation;
