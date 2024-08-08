import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../../components/allCharacter/Card";

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trend");
  const [characterData, setCharacterData] = useState<any[]>([]);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const charactersApi = process.env.EXPO_PUBLIC_API_URL + "/characters";
  const categoriesApi = process.env.EXPO_PUBLIC_API_URL + "/categories";
  useEffect(() => {
    fetch(charactersApi)
      .then((response) => response.json())
      .then((json) => setCharacterData(json));
    fetch(categoriesApi)
      .then((response) => response.json())
      .then((json) => setCategoryData(json));
  }, []);

  useEffect(() => {
    selectedCategory === "Trend" ? setFilteredData(
      characterData.filter((item) => { return item.category[0].name.includes(selectedCategory); })
    ) : setFilteredData(characterData.filter((item) => { return item.category[1].name.includes(selectedCategory); }));
  }, [selectedCategory, characterData]);

  return (
    <SafeAreaView className="flex-1 bg-background p-4">
      <View className="flex-1 items-center justify-center">
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="h-full w-full bg-background"
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedCategory(item)}
              className={`h-8 px-4 py-1 rounded-full mr-3 items-center justify-center ${selectedCategory === item ? "bg-primary text-white" : "bg-white"}`}>
              <Text
                className={`font-pmedium text-center ${selectedCategory === item ? "text-white" : ""}`}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View className="flex-12">
        <FlatList
          className="w-full h-full"
          showsVerticalScrollIndicator={false}
          data={filteredData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Card data={item} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
