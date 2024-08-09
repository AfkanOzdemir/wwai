import { Text, View, TouchableOpacity, Pressable } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MessageHeaderProps } from "../../types/Message";
import { router } from "expo-router";

const MessageHeader = ({
  CharacterID,
  CharacterName,
  CharacterImage,
  chatFunc,
  resetFunc,
}: MessageHeaderProps) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push("character/" + CharacterID);
      }}
    >
      <View className="w-full h-14  px-4  flex-row border-b  justify-center items-center py-2 border-[#1c1c2c] mb-3">
        <View className="flex-1">
          <Image
            source={CharacterImage}
            className="w-10 h-10  z-0 rounded-full"
            contentFit="cover"
            transition={500}
          />
        </View>
        <View className="mx-4 flex-5 flex-row items-center justify-between">
          <View>
            <Text className="font-psemibold text-lg text-white">
              {CharacterName}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageHeader;
