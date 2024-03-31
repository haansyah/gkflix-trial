import { View, Text, FlatList, Image, TouchableHighlight } from "react-native";
import React from "react";

const ListMovies = ({ navigation }, props) => {
  const { title, data } = props;
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate("DetailMovie");
      }}
    >
      <View>
        <View className="flex flex-row items-center justify-between mx-6 mb-4">
          <Text className="text-lg font-bold text-white">{title}</Text>
          <Text className="text-sm font-light text-blue-500">View All</Text>
        </View>

        <FlatList
          className="mb-5"
          data={data}
          horizontal
          overScrollMode="never"
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View
              className={`overflow-hidden h-[153px] w-[110px] rounded-lg mr-6 ${
                index === 0 && "ml-6"
              }`}
            >
              <Image
                source={item.image}
                className="flex-1 object-cover w-full "
              />
            </View>
          )}
        />
      </View>
    </TouchableHighlight>
  );
};

export default ListMovies;
