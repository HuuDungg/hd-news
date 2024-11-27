import PaperDrawer from "@/component/drawer/drawer";
import { Tabs } from "expo-router";
import { useState } from "react";
import Icon from 'react-native-vector-icons/Feather';

const TabLayout = () => {

  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={30} color="#000" />,
            tabBarActiveTintColor: "red",  // Màu của tên tab khi active
            tabBarInactiveTintColor: "gray",  // Màu của tên tab khi inactive
          }}
        />

        <Tabs.Screen
          name="short"
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="slack" size={30} color="#000" />,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          }}
        />

        <Tabs.Screen
          name="notice"
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="feather" size={30} color="#000" />,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          }}
        />

        <Tabs.Screen
          name="setting"
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="settings" size={30} color="#000" />,
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "gray",
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
