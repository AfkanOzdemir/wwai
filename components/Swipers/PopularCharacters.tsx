import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const PopularCharacters = ({ data }: { data: CharacterProps }) => {
  return (
    <Link
      href={{
        pathname: "/chat/[characterId]",
        params: { characterId: data.name, characterImage: data.image },
      }}
      className="w-52 h-72 rounded-xl mr-3 relative"
    >
      <View className="w-52 h-72 rounded-xl relative overflow-hidden">
        <LinearGradient
          colors={["transparent", "#161622"]}
          className="w-full h-full absolute bottom-0 z-10 p-2"
        >
          <View className="flex-row space-x-2">
            {data.properties.map((property: any, index: number) => (
              <View key={index} className="px-3 py-2 bg-[#1e1e1f] rounded-full">
                <Text className="text-white text-sm font-pmedium mr-1 ">
                  {property.name}
                </Text>
              </View>
            ))}
          </View>
          <View className="w-full h-full items-start justify-end pb-10 pl-2 mb-4">
            <Text className="text-white text-lg font-pmedium mb-1 text-center">
              {data.name}
            </Text>
            <Text className="text-slate-300 text-sm font-plight">
              {data.shortDescription}
            </Text>
          </View>
        </LinearGradient>
        <Image
          source={data.image}
          className="w-full h-full absolute z-0"
          contentFit="cover"
          transition={100}
        />
      </View>
    </Link>
  );
};

export default PopularCharacters;
