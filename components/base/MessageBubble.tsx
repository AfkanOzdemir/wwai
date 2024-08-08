import { View, Text } from "react-native";
import React from "react";
import TypeWriter from "react-native-typewriter";
import { Image } from "expo-image";
import { MessageProps } from "../../types/Message";

const MessageBubble = ({ dataItem }: { dataItem: MessageProps }) => {
  return dataItem.role === "user" ? (
    <View className="flex-row items-center justify-end mb-4">
      <View className="p-2 px-4 bg-primary rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
        <Text className="text-white font-pmedium">{dataItem.content}</Text>
      </View>
    </View>
  ) : (
    <View className="flex-col items-start justify-start mb-4">
      <View className="flex-row items-center justify-start relative">
        <View>
          <Image
            source={require("../../assets/ChatGPT-Logo.png")}
            className="w-8 h-8 rounded-full absolute "
          />
        </View>
        <View className="p-2 px-4 bg-[#2f2f44] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl ml-10">
          {dataItem.content === "Loading..." ? (
            <Text>Yazıyor...</Text>
          ) : (
            <Text className="text-white font-pmedium">
              <TypeWriter typing={2}>{dataItem.content}</TypeWriter>
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MessageBubble;
