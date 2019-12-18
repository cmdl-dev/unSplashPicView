import {createContext} from 'react';

const PictureContext = createContext({});

export const PictureProvider = PictureContext.Provider;
export const PictureConsumer = PictureContext.Consumer;

export default PictureContext;
