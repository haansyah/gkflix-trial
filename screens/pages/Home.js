import {
  View,
  Text,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import Logo from "../../assets/logo.png";
import {
  BoxOffice,
  Fantasy,
  Horror,
  NewMovies,
  Genres,
} from "../../assets/data/Data";
import { LinearGradient } from "expo-linear-gradient";
import ListMovies from "../components/List/ListMovies";

const Home = () => {
  return (
    <>
      <StatusBar
        translucent={false}
        barStyle={"light-content"}
        backgroundColor="black"
      />
      <SafeAreaView className="h-full bg-gray-950">
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
          <Image
            source={Logo}
            className="mx-6 mt-7 h-[22px] w-[105px] object-cover"
          />
          <FlatList
            className="mt-6 mb-5"
            data={Genres}
            horizontal
            overScrollMode="never"
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                className={`rounded-md py-2 px-3 mt-2 mr-5 ${
                  index === 0 ? "ml-6 bg-red-600" : "bg-gray-800"
                }`}
              >
                <Text
                  className={`${index === 0 ? "text-white" : "text-gray-600"}`}
                >
                  {item.name}
                </Text>
              </View>
            )}
          />

          <FlatList
            keyExtractor={(item) => item.id}
            className="mb-5"
            data={BoxOffice}
            horizontal
            overScrollMode="never"
            renderItem={({ item, index }) => (
              <View
                className={`w-[270px] h-[150px] mr-6 rounded-lg overflow-hidden relative ${
                  index === 0 && "ml-6"
                }`}
              >
                <ImageBackground
                  source={item.image}
                  className="flex-1 object-cover w-full"
                >
                  <LinearGradient
                    colors={["rgba(0,0,0,0.8)", "transparent"]}
                    className="absolute bottom-0 left-0 right-0 items-end justify-end h-full top-1/4"
                    start={{ x: 1, y: 1 }}
                    end={{ x: 1, y: 0 }}
                  />
                  <View className="absolute bottom-0 z-10 p-2">
                    <Text className="text-base font-bold text-white">
                      {item.title}
                    </Text>
                    <Text className="text-xs font-light text-gray-500">
                      {item.genres}
                    </Text>
                  </View>
                </ImageBackground>
                <View className="absolute top-0 right-0 p-1 bg-yellow-500 rounded-sm">
                  <Text className="font-bold ">Box Office</Text>
                </View>
              </View>
            )}
          />
          <ListMovies data={NewMovies} title="New Movies 2023" />
          <ListMovies data={Fantasy} title="Fantasy & Adventure" />
          <ListMovies data={Horror} title="Horror & Thriller" />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
