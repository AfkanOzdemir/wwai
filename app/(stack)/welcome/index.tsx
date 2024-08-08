import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'expo-image'

const index = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-4">
            <View className='flex-10'>
                <View className='w-full h-full max-w-sm max-h-24'>
                    <Image
                        source={"https://cdn.pixabay.com/photo/2024/08/01/18/20/girl-8937918_1280.png"}
                        className='w-full h-full'
                        contentFit='cover'
                        transition={100}
                    />
                </View>
            </View>
            <View className='flex-3 bg-red-600'>

            </View>
        </SafeAreaView>
    )
}

export default index