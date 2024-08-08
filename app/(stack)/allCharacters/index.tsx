import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'
import PopularCharacters from '../../../components/Swipers/PopularCharacters'


const index = () => {
    const [selectedCategory, setSelectedCategory] = useState("Trend")
    const characterCategories = ["Trend", "Bilim", "Sanat", "Spor", "Tarih", "Edebiyat", "Müzik", "Sinema", "Felsefe", "Politika", "Din", "Bilim Kurgu", "Fantastik", "Korku", "Aksiyon", "Macera", "Komedi", "Drama", "Romantik", "Belgesel", "Çocuk", "Gençlik", "Yetişkin", "Kadın", "Erkek", "LGBTQ+", "Çift", "Aile", "Arkadaş", "Düşman", "Kahraman"]

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
        }, {
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
        }, {
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
    ]

    return (
        <SafeAreaView className='flex-1 bg-background p-4'>
            <View className='flex-1 items-center justify-center'>
                <FlatList horizontal={true} showsHorizontalScrollIndicator={false} className='h-full w-full bg-background' data={characterCategories} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(item)}
                        className={`h-8 px-4 py-1 rounded-full mr-3 items-center justify-center ${selectedCategory === item ? 'bg-primary text-white' : 'bg-white'}`}>
                        <Text className={`font-pmedium text-center ${selectedCategory === item ? 'text-white' : ''}`}>{item}</Text>
                    </TouchableOpacity>
                )} />
            </View>
            <View className='flex-12'>
                <FlatList
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    data={data} keyExtractor={(item, index) => index.toString()} renderItem={({ item }) => (
                        <PopularCharacters key={item.id} data={item} />
                    )} />
            </View>
        </SafeAreaView>
    )
}

export default index