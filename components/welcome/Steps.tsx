import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Steps = ({ title, content, children }: {
  title: string,
  content: string,
  children: React.ReactNode,
}) => {
  return (
    <View className='w-full flex-1 items-start justify-between'>
      <Text className='text-primary fonFt-psemibold text-2xl'>
        {title}
      </Text>
      <Text className='text-white font-plight text-base'>
        {content}
      </Text>
      <View className='w-full h-auto'>
        {children}
      </View>
    </View>
  )
}

export default Steps