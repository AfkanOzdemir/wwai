import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Tag from "../../../components/base/Tag";
import ChatHistoryCard from "../../../components/character/ChatHistoryCard";
import ChatButton from "../../../components/character/ChatButton";
import ContentBox from "../../../components/base/ContentBox";
import ProfileSection from "../../../components/character/ProfileSection";
import Context from "../../../context";
import { ContextApiProps } from "../../../types/Message";

const Characters = () => {
  const { id } = useLocalSearchParams();
  const [profileCharacter, setProfileCharacter] = useState<CharacterProps>();
  const { apiData } = useContext<ContextApiProps>(Context);
  useEffect(() => {
    apiData.find((item: any) => item.id == id && setProfileCharacter(item));
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-background p-4 relative">
      <ScrollView
        className="w-full h-full"
        showsVerticalScrollIndicator={false}
      >
        <ProfileSection
          profileName={profileCharacter?.name}
          profileImage={profileCharacter?.image}
        />
        <View className="flex-12 mb-20">
          <View className="rounded-xl bg-secondary p-2">
            <ContentBox content="Açıklama">
              <Text className=" font-plight text-slate-300 text-sm">
                {profileCharacter?.description}
              </Text>
            </ContentBox>
            <ContentBox content="Kategoriler">
              <View className="flex-row space-x-3">
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="flex-row space-x-2"
                  data={profileCharacter?.category}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => <Tag text={item.name} />}
                />
              </View>
            </ContentBox>
            <ContentBox content="Özellikler">
              <View className="flex-row space-x-3">
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  className="flex-row space-x-2"
                  data={profileCharacter?.properties}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item }) => <Tag text={item.name} />}
                />
              </View>
            </ContentBox>
            {/* <ContentBox content="Geçmiş Sohbetler">
              <View className="flex-col space-y-3">
                {Array(3)
                  .fill(0)
                  .map((_, index) => (
                    <ChatHistoryCard
                      key={index}
                      image="https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"
                      name="Muhammed Ali"
                      content="Merhaba, ben Muhammed Ali."
                    />
                  ))}
              </View>
            </ContentBox> */}
          </View>
        </View>
      </ScrollView>
      <ChatButton profileCharacter={profileCharacter} />
    </SafeAreaView>
  );
};

export default Characters;
