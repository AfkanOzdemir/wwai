import { Text, View, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MessageHeaderProps } from "../../types/Message";

const MessageHeader = ({
  CharacterID,
  CharacterImage,
  chatFunc,
  resetFunc,
}: MessageHeaderProps) => {
  console.log(CharacterImage);
  return (
    <View className="w-full h-36 flex-1 px-4  flex-row border-b pb-5 border-[#1c1c2c] mb-3">
      <View className="flex-1">
        <Image
          source={CharacterImage}
          className="w-full h-full absolute z-0 rounded-full"
          contentFit="cover"
          transition={500}
        />
      </View>
      <View className="mx-4 flex-5 flex-row items-center justify-between">
        <View>
          <Text className="font-psemibold text-lg text-white">{CharacterID}</Text>
        </View>
        <TouchableOpacity
          className="p-2 bg-primary rounded-full items-center justify-center"
          onPress={() => {
            chatFunc([]);
            resetFunc();
          }}
        >
          <Ionicons name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageHeader;
