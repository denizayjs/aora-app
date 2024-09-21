import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';

const FormFiled = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-medium'>{title}</Text>

      <View className='w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row'>
        <TextInput
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7b7b8b'
          onChange={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
          <TouchableOpacity
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode='contain'
              className='w-6 h-6'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFiled;
