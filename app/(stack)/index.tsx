import { View, Text, FlatList } from "react-native";
import { Image } from "expo-image";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/base/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PopularCharacters from "../../components/Swipers/PopularCharacters";
import Context from "../../context";
import { ContextApiProps } from "../../types/Message";
import Loading from "../../components/base/Loading";
import { useToast } from "react-native-toast-notifications";

const index = () => {
  const toast = useToast();
  const { apiData, setApiData } = useContext<ContextApiProps>(Context);
  const charactersApi = process.env.EXPO_PUBLIC_API_URL + "/characters";
  useEffect(() => {
    fetch(charactersApi)
      .then((response) => response.json())
      .then((json) => setApiData(json.data))
      .catch((e: Error) => {
        toast.show("Lütfen Bağlantınızı kontrol ediniz", {
          type: "danger",
        });
      });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-background">
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
                Hemen Kendi Karakterini Seç ve Sohbete Başla!
              </Text>
              <Button text="Karakter Seç" link="allCharacters" />
            </View>
          </LinearGradient>
        </View>
        <View className="flex-5 mt-5">
          <Text className="text-white text-lg font-pmedium mb-4">
            Popüler Karakterler
          </Text>
          {apiData && apiData?.length > 0 ? (
            <FlatList
              data={apiData}
              horizontal={true}
              keyExtractor={(item) => item.id.toString()}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Suspense fallback={<Loading></Loading>}>
                  <PopularCharacters key={index} data={item} />
                </Suspense>
              )}
            />
          ) : (
            <Loading />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
