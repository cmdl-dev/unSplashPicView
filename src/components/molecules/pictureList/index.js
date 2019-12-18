import React, {useEffect, useContext} from 'react';
import {Text, ScrollView, View, ActivityIndicator} from 'react-native';
import {DONE, ERROR} from '../../../reducers/globalReducer';
import PictureContext from '../../../context/PictureContext';
import styleSheet from './style';
import {fetchUnsplash} from '../../api/helpers';
import {Picture} from '../../atoms';

const PictureList = () => {
  const {state, dispatch} = useContext(PictureContext);

  const fetchPhotos = async () => {
    console.log('Picture Context', state.isLoading);
    try {
      const response = await fetchUnsplash(`/search/photos`, state.searchTerm);
      dispatch({type: DONE, payload: response.results});
    } catch (err) {
      console.log(err);
      dispatch({type: ERROR, payload: err.message});
    }
  };
  useEffect(() => {
    fetchPhotos();
  }, [state.searchTerm]);
  return (
    <>
      {state.error.length !== 0 && (
        <View>
          <Text style={[styleSheet.text, styleSheet.textError]}>
            {state.error}
          </Text>
        </View>
      )}
      {state.pictures.length === 0 ? (
        <View style={styleSheet.textMiddle}>
          <Text style={styleSheet.text}>Start typing</Text>
        </View>
      ) : (
        <>
          {state.isLoading && (
            <ActivityIndicator
              style={{backgroundColor: 'transparent'}}
              size="large"
              animating={state.isLoading}
            />
          )}
          <ScrollView>
            <View style={[{flex: 1}, styleSheet.listContainer]}>
              {state.pictures.map((photo, index) => {
                return (
                  <Picture
                    key={index}
                    src={photo.urls.small}
                    dimensions={{w: 170, h: 170}}
                  />
                );
              })}
            </View>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default PictureList;
