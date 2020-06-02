import React from "react";
import MapViewDirections from "react-native-maps-directions";

export default function Directions({ destination, origin, onReady }){
    return (
      <MapViewDirections
        destination={destination}
        origin={origin}
        onReady={onReady}
        apikey="YOUR_KEY"
        strokeWidth={3}
        strokeColor="#222"
      />
    );
}

