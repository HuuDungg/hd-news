import { Stack } from "expo-router";
import { Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <PaperProvider>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profile/edit"
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitle: "Edit profile"
              }}
            />
            <Stack.Screen
              name="profile/privacy"
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitle: "Privacy"
              }}
            />
            <Stack.Screen
              name="profile/about"
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitle: "About author"
              }}
            />
            <Stack.Screen
              name="(search)/search"
              options={{
                headerShown: true,
                headerBackTitle: "Home",
                headerTintColor: "black",
                headerTitle: "Search"
              }}
            />
            <Stack.Screen
              name="result/[keyword]"
              options={{
                headerShown: true,
                headerTintColor: "black",
              }}
            />
            <Stack.Screen
              name="comment/[id]"
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerTitle: 'Comment'
              }}
            />
            <Stack.Screen
              name="index"
              options={{
                headerShown: false,
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitle: "",
              }}
            />
            <Stack.Screen
              name="detail/[id]"
              options={{
                headerShown: true,
                headerTintColor: "black",
                headerBackTitle: "Back",
                headerTitle: "",
              }}
            />            
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
