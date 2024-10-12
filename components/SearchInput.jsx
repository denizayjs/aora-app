import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  return (
    <View className='w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
      <TextInput
        className='text-base mt-0.5  text-white flex-1 font-pregular'
        value={value}
        placeholder='Search a video topic'
        placeholderTextColor='#7b7b8b'
        onChangeText={handleChangeText}
      />

      <TouchableOpacity onPress={() => {}}>
        <Image source={icons.search} resizeMode='contain' className='w-5 h-5' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
