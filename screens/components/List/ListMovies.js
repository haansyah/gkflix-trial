import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const ListMovies = (props) => {
  const { title, data } = props;
  return (
    <View>
      <View className="flex flex-row justify-between mx-6 items-center mb-4">
        <Text className="text-white font-bold text-lg">{title}</Text>
        <Text className="text-blue-500 font-light text-sm">View All</Text>
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
              className="object-cover flex-1 w-full "
            />
          </View>
        )}
      />
    </View>
  );
};

export default ListMovies;
