import { View, Text } from 'react-native';
import React, { useReducer, createContext } from 'react';
import { OriginReducer, DestinationReducer } from '../Reducers/Reducers';

export const OriginContext = createContext();
export const DestinationContext = createContext();

export function OriginContextProvider(props) {
  const [origin, dispatchOrigin] = useReducer(OriginReducer, {
    latitude: null,
    longitude: null,
    address: '',
    name: '',
  });
  return (
    <OriginContext.Provider value={{ origin, dispatchOrigin }}>
      {props.children}
    </OriginContext.Provider>
  );
}

export function DestinationContextProvider(props) {
  const [destination, dispatchDestination] = useReducer(DestinationReducer, {
    latitude: null,
    longitude: null,
    address: '',
    name: '',
  });
  return (
    <DestinationContext.Provider value={{ destination, dispatchDestination }}>
      {props.children}
    </DestinationContext.Provider>
  );
}
