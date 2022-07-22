import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import Pizza from "../../assets/pizza.jpg";

const FeaturedRow = ({ title }) => {
  return (
    <View>
      <View className="flex-row justify-between px-2 pt-4">
        <Text className="text-lg font-bold">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <ScrollView
        className="pt-4"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 6,
        }}
      >
        <FeaturedCard
          imgUrl={Pizza}
          dishes={[]}
          lat={20}
          long={20}
          address="Lakeside"
          rating={4.5}
          id={123}
          description="Best Pizza In Ghana"
          title="Papa's Pizza"
          price='50.00'
          estimated_tiime='35-40 min'
        />
        <FeaturedCard
          imgUrl={Pizza}
          dishes={[]}
          lat={20}
          long={20}
          address="Lakeside"
          rating={4.5}
          id={123}
          description="Best Pizza In Ghana"
          title="Papa's Pizza"
          price='50.00'
          estimated_tiime='35-40 min'
        />
        <FeaturedCard
          imgUrl={Pizza}
          dishes={[]}
          lat={20}
          long={20}
          address="Lakeside"
          rating={4.5}
          id={123}
          description="Best Pizza In Ghana"
          title="Papa's Pizza"
          price='50.00'
          estimated_tiime='35-40 min'
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
