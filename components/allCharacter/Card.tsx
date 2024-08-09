import { View, Text, Pressable } from "react-native";
import React from "react";
import { AllCharacterCardProps } from "../../types/Message";
import { Image } from "expo-image";
import { router } from "expo-router";
const Card = ({ data }: AllCharacterCardProps) => {
  return (
    <Pressable
      onPress={() => {
        router.push("character/" + data.id);
      }}
      className="w-full h-24 flex-row rounded-xl overflow-hidden mb-2 bg-secondary px-3"
    >
      <View className="flex-4 justify-center">
        <Image
          source={data.image}
          className="w-16 h-16 rounded-full"
          contentFit="cover"
          transition={100}
        />
      </View>
      <View className="flex-12">
        <View className="w-full h-full items-start justify-center">
          <Text className="text-white text-lg font-pmedium mb-1 text-center">
            {data.name}
          </Text>
          <Text className="text-slate-300 text-sm font-plight">
            {data.shortDescription}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;
