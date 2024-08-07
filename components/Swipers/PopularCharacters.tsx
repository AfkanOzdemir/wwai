import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'


const PopularCharacters = ({ data }: {
    data: {
        id: any,
        properties: {
            name: string
        }[],
        name: string,
        description: string,
        shortDescription: string,
        image: string
    }
}) => {
    return (
        <Link href={{
            pathname: "character/" + data.id,
            params: { id: data.id },
        }} className="w-52 h-72 rounded-xl mr-2 relative">
            <View className="w-52 h-72 rounded-xl mr-2 relative">
                <LinearGradient colors={["transparent", "#161622"]} className="w-full h-full absolute bottom-0 z-10 p-2">
                    <View className="flex-row space-x-2">
                        {
                            data.properties.map((property) => (
                                <View className="px-3 py-2 bg-[#1e1e1f] rounded-full">
                                    <Text className="text-white text-sm font-pmedium mr-1 ">
                                        {property.name}
                                    </Text>
                                </View>
                            ))
                        }
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

    )
}

export default PopularCharacters