import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { icons } from '../constants';
import { usePathname, router } from 'expo-router';

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View className='w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row space-x-4'>
      <TextInput
        className='text-base mt-0.5  text-white flex-1 font-pregular'
        value={query}
        placeholder='Search a video topic'
        placeholderTextColor='#cdcde0'
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            Alert.alert(
              'Missing query',
              'Please input something to search result across database',
            );
          }
          if (pathname.startsWith('/search')) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} resizeMode='contain' className='w-5 h-5' />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
