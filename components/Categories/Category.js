import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";

const Category = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className='relative mx-1'>
      <Image source={ imgUrl }  className='h-20 w-20 rounded' />
      <Text className='absolute bottom-1 left-1 text-white text-base font-bold'>{title}</Text>
    </TouchableOpacity>
  );
};

export default Category;
