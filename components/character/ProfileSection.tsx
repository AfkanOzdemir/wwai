import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

const ProfileSection = () => {
    return (
        <View className="flex-4 my-4 items-center justify-center">
            <View className="w-28 h-28 p-1 border border-primary rounded-full">
                <View className="w-full h-full rounded-full overflow-hidden">
                    <Image
                        source="https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"
                        className="w-full h-full z-0 rounded-full"
                        contentFit="cover"
                        transition={100}
                    />
                </View>
            </View>
            <Text className="mt-4 text-white font-psemibold text-xl">
                Muhammed Ali
            </Text>
        </View>
    )
}

export default ProfileSection