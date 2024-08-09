import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { router } from "expo-router";

const ChatButton = ({ profileCharacter }: { profileCharacter: any }) => {
  return (
    <TouchableOpacity
      className="w-full py-3 bg-primary rounded-full flex-row space-x-2 items-center justify-center absolute bottom-5 right-5"
      onPress={() => {
        router.navigate({
          pathname: "/chat/[characterId]",
          params: {
            characterId: profileCharacter.id,
            characterName: profileCharacter.name,
            characterImage: profileCharacter.image,
          },
        });
      }}
    >
      <Ionicons name="chatbubble-ellipses" size={24} color="white" />
      <Text className="text-white font-pmedium">
        {profileCharacter?.name} ile Sohbete Et
      </Text>
    </TouchableOpacity>
  );
};

export default ChatButton;
