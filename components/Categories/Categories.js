import { View, Text, ScrollView } from "react-native";
import React from "react";
import Category from "./Category";
import Pizza from "../../assets/pizza.jpg";

const Categories = () => {
  return (
    <ScrollView className=''
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 10,
      }}
    >
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
      <Category
        imgUrl={Pizza}
        title="Pizza"
      />
    </ScrollView>
  );
};

export default Categories;
