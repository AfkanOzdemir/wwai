import { View, Text, FlatList } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../../components/base/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import PopularCharacters from "../../components/Swipers/PopularCharacters";
import { Link } from "expo-router";

const index = () => {
  const data = [
    {
      id: 1,
      name: "Albert Einstein",
      image:
        "https://cdn.pixabay.com/photo/2024/06/06/08/40/ai-generated-8812169_1280.jpg",
      shortDescription:
        "Merhaba, ben Albert Einstein. Fizikçi, matematikçi ve filozofum...",
      description:
        "Merhaba, ben Albert Einstein. Fizikçi, matematikçi ve filozofum. 14 Mart 1879 tarihinde Almanya'nın Württemberg Krallığı'na bağlı Ulm şehrinde doğdum. 18 Nisan 1955 tarihinde ABD'nin New Jersey eyaletine bağlı Princeton şehrinde hayata gözlerimi yumdu. 20. yüzyılın en önemli fizikçilerinden biri olarak kabul edilirim. Beni tanımanızı çok isterim.",
      properties: [
        {
          id: 1,
          name: "Zeka",
          value: 100,
        },
        {
          id: 2,
          name: "Kültür",
          value: 80,
        },
      ],
    },
    {
      id: 2,
      name: "Leonardo Da Vinci",
      image:
        "https://cdn.pixabay.com/photo/2023/10/12/16/11/ai-generated-8311192_1280.png",
      shortDescription:
        "Merhaba, ben Leonardo Da Vinci. Ünlü İtalyan ressamım...",
      description:
        "Merhaba, ben Leonardo Da Vinci. Rönesans döneminin İtalyan ressamı, bilim insanı, matematikçi, mühendis, anatomist, mucit, heykeltıraş, mimar, müzisyen, yazar, filozof ve botanikçiyim. 15 Nisan 1452 tarihinde İtalya'nın Vinci şehrinde doğdum. 2 Mayıs 1519 tarihinde Fransa'nın Amboise şehrinde hayata gözlerimi yumdu. Beni tanımanızı çok isterim.",
      properties: [
        {
          id: 1,
          name: "Sanat",
          value: 100,
        },
        {
          id: 2,
          name: "Kültür",
          value: 80,
        },
      ],
    },
    {
      id: 3,
      name: "Thomas Edison",
      image:
        "https://cdn.pixabay.com/photo/2024/05/25/07/48/ai-generated-8786570_1280.jpg",
      shortDescription:
        "Merhaba, ben Thomas Edison. Amerikalı mucit ve iş adamıyım...",
      description:
        "Merhaba, ben Thomas Edison. Amerikalı mucit ve iş adamıyım. 11 Şubat 1847 tarihinde ABD'nin Ohio eyaletine bağlı Milan şehrinde doğdum. 18 Ekim 1931 tarihinde ABD'nin New Jersey eyaletine bağlı West Orange şehrinde hayata gözlerimi yumdu. Elektrik ampulünü icat ettiğim için tanınırım. Beni tanımanızı çok isterim.",
      properties: [
        {
          id: 1,
          name: "Zeka",
          value: 100,
        },
        {
          id: 2,
          name: "Kültür",
          value: 80,
        },
      ],
    },
  ];

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
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <PopularCharacters key={item.id} data={item} />
            )}
          />
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
