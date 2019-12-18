import React, {useState, useEffect, useContext, useRef} from 'react';
import PictureContext from '../../../context/PictureContext';
import {DONE, SEARCH, LOADING} from '../../../reducers/globalReducer';
import debounceInput from '../../hooks/debounceInput';
import {TextInput} from 'react-native';
import styleSheet from './style';

const SearchBar = () => {
  const {dispatch} = useContext(PictureContext);
  const loaded = useRef(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debounceSearch = debounceInput(searchTerm, 1500);

  useEffect(() => {
    // Checking if the seach term is '' so that we don't to make an api request empty string
    if (debounceSearch) {
      // Dispatching our search to the global state
      dispatch({type: SEARCH, payload: debounceSearch});
    } else {
      dispatch({type: DONE, payload: []});
    }
  }, [debounceSearch]);
  useEffect(() => {
    if (loaded.current) {
      dispatch({type: LOADING});
    } else {
      loaded.current = true;
    }
  }, [searchTerm]);

  return (
    <TextInput
      style={styleSheet.input}
      onChangeText={text => setSearchTerm(text)}
    />
  );
};

export default SearchBar;
