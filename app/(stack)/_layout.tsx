import React from "react";
import { Stack } from "expo-router";
import { View } from "react-native";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="welcome/index" />
      <Stack.Screen
        name="character/[id]"
        options={{
          animation: "slide_from_right",
        }}
      />
    </Stack>
  );
};

export default _layout;
