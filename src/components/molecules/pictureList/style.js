import {StyleSheet} from 'react-native';

const styleSheet = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  overLay: {
    ...StyleSheet.absoluteFill,
    top: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  textMiddle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    color: '#FF9494',
  },
});

export default styleSheet;
