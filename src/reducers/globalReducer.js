export const DONE = 'DONE';
export const SEARCH = 'SEARCH';
export const ERROR = 'ERROR';
export const LOADING = 'LOADING';

const PictureListReducer = (state, action) => {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchTerm: action.payload,
      };
    }
    case DONE: {
      return {
        ...state,
        isLoading: false,
        error: '',
        pictures: action.payload,
      };
    }
    case LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default PictureListReducer;
