import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OrderAgain from "../screens/OrderAgain";
import Categories from "../screens/Categories";
import Account from "../screens/Account";
import Cart from "../screens/Cart";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function ButtomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../navigation/Images/HomeF.png") 
                    : require("../navigation/Images/homeT.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Order Again"
          component={OrderAgain}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../navigation/Images/OrderF.png")
                    : require("../navigation/Images/OrderT.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../navigation/Images/CategoriesF.png")
                    : require("../navigation/Images/CategoriesT.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
      <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../navigation/Images/CartF.png")
                    : require("../navigation/Images/CartT.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarActiveTintColor: "green",
            tabBarIcon: ({ focused }) => (
              <Image
                source={
                  focused
                    ? require("../navigation/Images/AccountF.png")
                    : require("../navigation/Images/AccountT.png")
                }
                style={{ width: 24, height: 24 }}
              />
            ),
          }}
          />
      </Tab.Navigator>
    );
  }
  const AuthStack = () => {
    return <Stack.Navigator></Stack.Navigator>;
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={ButtomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
