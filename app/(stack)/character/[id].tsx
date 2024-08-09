import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import Tag from "../../../components/base/Tag";
import ChatHistoryCard from "../../../components/character/ChatHistoryCard";
import ChatButton from "../../../components/character/ChatButton";
import ContentBox from "../../../components/base/ContentBox";
import ProfileSection from "../../../components/character/ProfileSection";

const Characters = () => {
  const data = useLocalSearchParams()
  return (
    <SafeAreaView className="flex-1 bg-background p-4 relative">
      <ScrollView className="w-full h-full" showsVerticalScrollIndicator={false}>
        <ProfileSection />
        <View className="flex-12 mb-20">
          <View className="rounded-xl bg-secondary p-2">
            <ContentBox content="Açıklama">
              <Text className=" font-plight text-slate-300 text-sm">
                Merhaba, ben Muhammad Ali. Efsane boksörüm. 17 Ocak 1942 tarihinde ABD'nin Kentucky eyaletine bağlı Louisville şehrinde doğdum. 3 Haziran 2016 tarihinde ABD'nin Arizona eyaletine bağlı Scottsdale şehrinde hayata gözlerimi yumdu. Beni tanımanızı çok isterim.
              </Text>
            </ContentBox>
            <ContentBox content="Kategoriler">
              <View className="flex-row space-x-3">
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="flex-row space-x-2" data={Array(4).fill(0)} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                    <Tag text={"Kategori"} />
                  )} />
              </View>
            </ContentBox>
            <ContentBox content="Özellikler">
              <View className="flex-row space-x-3">
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="flex-row space-x-2" data={Array(7).fill(0)} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                    <Tag text={"Özellik"} />
                  )} />
              </View>
            </ContentBox>
            <ContentBox content="Geçmiş Sohbetler">
              <View className="flex-col space-y-3">
                {Array(3).fill(0).map((_, index) => (
                  <ChatHistoryCard key={index} image="https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png" name="Muhammed Ali" content="Merhaba, ben Muhammed Ali." />
                ))
                }
              </View>
            </ContentBox>
          </View>
        </View>
      </ScrollView>
      <ChatButton />
    </SafeAreaView>
  );
};

export default Characters;
