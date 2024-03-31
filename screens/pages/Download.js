import { Text, StatusBar, ScrollView, SafeAreaView } from "react-native";
import React from "react";

const Download = () => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle={"light-content"}
        backgroundColor="black"
      />
      <SafeAreaView className="h-full bg-gray-950">
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <Text className="text-white">Download Page</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Download;
