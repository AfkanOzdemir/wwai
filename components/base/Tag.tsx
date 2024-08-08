import { View, Text } from 'react-native'
import React from 'react'

const Tag = ({ text }: { text: string }) => {
    return (
        <View className="bg-primary px-5 py-2 rounded-full mr-2">
            <Text className="text-white font-pmedium">{text}</Text>
        </View>
    )
}

export default Tag