import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Card from "../../../components/allCharacter/Card";
import { ContextApiProps } from "../../../types/Message";
import Context from "../../../context";
import Loading from "../../../components/base/Loading";
import { useToast } from "react-native-toast-notifications";

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trend");
  const { apiData } = useContext<ContextApiProps>(Context);
  const [categoryData, setCategoryData] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const categoriesApi = process.env.EXPO_PUBLIC_API_URL + "/categories";
  const toast = useToast();
  useEffect(() => {
    fetch(categoriesApi)
      .then((response) => response.json())
      .then((json) => setCategoryData(json))
      .catch((e) => {
        toast.show("Kategoriler Yüklenirken bir sorunla karşılaşıldı", {
          type: "danger",
        });
      });
  }, []);

  useEffect(() => {
    selectedCategory === "Trend"
      ? setFilteredData(
          apiData?.filter((item: any) => {
            return item.category[0].name.includes(selectedCategory);
          })
        )
      : setFilteredData(
          apiData?.filter((item: any) => {
            return item.category[1].name.includes(selectedCategory);
          })
        );
  }, [selectedCategory, apiData]);

  return (
    <SafeAreaView className="flex-1 bg-background p-4">
      <View className="flex-1 items-center justify-center">
        {categoryData && categoryData.length > 0 ? (
          <FlatList
            horizontal={true}
            initialNumToRender={4}
            showsHorizontalScrollIndicator={false}
            className="h-full w-full bg-background"
            data={categoryData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(item)}
                className={`h-8 px-4 py-1 rounded-full mr-3 items-center justify-center ${
                  selectedCategory === item
                    ? "bg-primary text-white"
                    : "bg-white"
                }`}
              >
                <Text
                  className={`font-pmedium text-center ${
                    selectedCategory === item ? "text-white" : ""
                  }`}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <Loading />
        )}
      </View>
      <View className="flex-12">
        {filteredData && filteredData.length > 0 ? (
          <FlatList
            className="w-full h-full"
            initialNumToRender={4}
            showsVerticalScrollIndicator={false}
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Card data={item} />}
          />
        ) : (
          <Loading />
        )}
      </View>
    </SafeAreaView>
  );
};

export default index;
