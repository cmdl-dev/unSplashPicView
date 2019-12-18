import React, {useReducer} from 'react';
import {SafeAreaView} from 'react-native';
import styleSheet from './style';
import {PictureProvider} from '../../../context/PictureContext';
import PictureListReducer from '../../../reducers/globalReducer';
import {PictureList} from '../../molecules';
import {SearchBar} from '../../atoms';

const HomeScreen = () => {
  const initialState = {
    isLoading: false,
    searchTerm: '',
    error: '',
    pictures: [],
  };
  const [state, dispatch] = useReducer(PictureListReducer, initialState);
  return (
    <SafeAreaView style={styleSheet.container}>
      <PictureProvider value={{state, dispatch}}>
        <SearchBar />
        <PictureList />
      </PictureProvider>
    </SafeAreaView>
  );
};

export default HomeScreen;
