import { View, Text } from "react-native";
import React from "react";
import TypeWriter from "react-native-typewriter";
import { Image } from "expo-image";
import { MessageBubbleProps } from "../../types/Message";

const MessageBubble = ({
  dataItem,
  Loading,
}: {
  dataItem: MessageBubbleProps;
  Loading: Function;
}) => {
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
            source={dataItem.image}
            className="w-8 h-8 rounded-full absolute "
          />
        </View>
        <View className="p-2 px-4 bg-secondary rounded-tl-3xl rounded-tr-3xl rounded-br-3xl ml-10">
          {dataItem.content === "Loading..." ? (
            <Text className="text-slate-400">Yazıyor...</Text>
          ) : (
            <Text className="text-white font-pmedium">
              <TypeWriter
                onTyped={(token, previousVisibleCharacters) => {
                  if (dataItem.content.length === previousVisibleCharacters) {
                    Loading(false);
                  } else {
                    Loading(true);
                  }
                }}
                typing={1}
              >
                {dataItem.content}
              </TypeWriter>
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default MessageBubble;
