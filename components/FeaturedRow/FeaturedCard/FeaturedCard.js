import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { StarIcon } from "react-native-heroicons/solid";
import { LocationMarkerIcon } from "react-native-heroicons/outline";
import { urlFor } from "../../../sanity";

const FeaturedCard = ({
  imgUrl,
  dishes,
  lat,
  long,
  address,
  rating,
  id,
  description,
  title,
  price,
  estimated_tiime,
}) => {
  return (
    <TouchableOpacity className="bg-white shadow mr-3">
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url(),}}
          className="rounded-lg h-36 w-64"
        />
        <View className="bg-white w-auto rounded-xl absolute bottom-4 right-4 px-2 py-0.5">
          <Text className="text-xs font-bold">{estimated_tiime}</Text>
        </View>
      </View>
      <View className="m-2">
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-lg">{title}</Text>
          <View className="flex-row items-center space-x-1">
            <StarIcon color="black" size={15} />
            <Text className="font-bold">{rating}</Text>
          </View>
        </View>
        <View className="flex-row justify-between">
          <Text>${price}</Text>
          <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon opacity={0.5} size={22} color="gray" />
            <Text className="text-gray-500 text-xs">{address}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
