import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const Button = ({ text, link }: { text: string; link: string }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(link);
      }}
      className="px-6 py-2 bg-primary rounded-xl items-center justify-center"
    >
      <Text className="text-white font-psemibold text-center">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
