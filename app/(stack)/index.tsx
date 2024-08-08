import { View, Text, FlatList } from "react-native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/base/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PopularCharacters from "../../components/Swipers/PopularCharacters";
import { Link } from "expo-router";

const index = () => {
  const [data, setData] = useState<any[]>([]);
  const charactersApi = process.env.EXPO_PUBLIC_API_URL + "/characters";
  useEffect(() => {
    fetch(charactersApi)
      .then((response) => response.json())
      .then((json) => setData(json));
      console.log(data);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="light" />
      <View className="flex-1 bg-background p-4">
        <View className="flex-2 rounded-xl overflow-hidden relative">
          <Image
            source="https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"
            className="w-full h-full absolute z-0"
            contentFit="cover"
            transition={100}
          />
          <LinearGradient
            colors={["transparent", "#161622"]}
            className="w-full h-full absolute bottom-0 z-10"
          >
            <View className="w-full h-full flex-col justify-end items-center z-10 p-5 ">
              <Text className="w-full text-white text-lg font-pmedium mb-4 text-center">
                Hemen Kendi Karakterini Oluştur ve Sohbete Başla!
              </Text>
              <Button text="Karakter Oluştur" link="chat" />
            </View>
          </LinearGradient>
        </View>
        <View className="flex-5 mt-5">
          <Text className="text-white text-lg font-pmedium mb-4">
            Popüler Karakterler
          </Text>
          {data.length > 0 ? (
            <FlatList
              data={data}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <PopularCharacters data={item} />
              )}
            />
          ) : null}
        </View>
      </View>
      <View>
        <Link href="allCharacters" className="p-2 bg-primary rounded-full items-center justify-center">
          <Text className="text-white font-pmedium">Tüm Karakterler</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default index;
