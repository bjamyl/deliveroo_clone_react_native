import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import Pizza from "../../assets/pizza.jpg";
import sanityClient from "../../sanity";

const FeaturedRow = ({ title, id }) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'featured'  && _id == $id]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
  type{
    name
  }
    }
  }[0]`,
        { id }
      )
      .then((data) => {
        setRestaurants(data?.restaurants);
      });
  }, []);

  console.log(restaurants);

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
        {restaurants?.map((restaurant) => (
          <FeaturedCard
            key={restaurant._id}
            dishes={restaurant.dishes}
            lat={restaurant.lat}
            long={restaurant.long}
            address={restaurant.address}
            rating={restaurant.rating}
            id={restaurant._id}
            description={restaurant.short_description}
            title={restaurant.title}
            imgUrl={restaurant.image}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
