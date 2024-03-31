import { Text, StatusBar, ScrollView, SafeAreaView, View } from "react-native";
import React from "react";

const Setting = () => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle={"light-content"}
        backgroundColor="black"
      />
      <SafeAreaView className="h-full bg-gray-950">
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <View className="mx-6 mt-6 border-b-[1px] border-gray-700 pb-6">
            <Text className="text-xl text-white">Setting Page</Text>
            <Text className="mt-2 text-base text-gray-400">Account</Text>
            <Text className="mt-2 text-base text-gray-400">Privacy</Text>
          </View>
          <View className="mx-6 mt-6 border-b-[1px] border-gray-700 pb-6">
            <Text className="text-xl text-white">Appearance</Text>
            <Text className="mt-2 text-base text-gray-400">Themes</Text>
            <Text className="mt-2 text-base text-gray-400">Subtitle</Text>
            <Text className="mt-2 text-base text-gray-400">Audio</Text>
          </View>
          <View className="mx-6 mt-6 border-b-[1px] border-gray-700 pb-6">
            <Text className="text-xl text-white">Setting Page</Text>
            <Text className="mt-2 text-base text-gray-400">Account</Text>
            <Text className="mt-2 text-base text-gray-400">Privacy</Text>
            <Text className="mt-2 text-base text-gray-400">Themes</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Setting;
