import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import * as Icons from "react-native-heroicons/outline";

import HomeScreen from "../screens/pages/Home";
import DownloadScreen from "../screens/pages/Download";
import SettingScreen from "../screens/pages/Setting";
import DetailMovie from "../screens/pages/DetailMovie";

import Colors from "../assets/Colors";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const NavigationRouter = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="Tab" component={TabStack} />
      <Stack.Screen name="DetailMovie" component={DetailMovie} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      overScrollMode="never"
      tabBarPosition="bottom"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case "HomeScreen":
              return (
                <Icons.HomeIcon
                  color={focused ? "white" : Colors.gray[300]}
                  size={30}
                />
              );
              break;
            case "DownloadScreen":
              return (
                <Icons.FilmIcon
                  color={focused ? "white" : Colors.gray[300]}
                  size={30}
                />
              );
              break;
            case "SettingScreen":
              return (
                <Icons.Cog6ToothIcon
                  color={focused ? "white" : Colors.gray[300]}
                  size={30}
                />
              );
              break;
          }
        },
        headerShown: false,
        tabBarIndicatorStyle: { display: "none" },
        tabBarStyle: {
          height: 55,
          backgroundColor: Colors.gray[950],
          borderTopColor: Colors.gray[500],
        },
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DownloadScreen" component={DownloadScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default NavigationRouter;
