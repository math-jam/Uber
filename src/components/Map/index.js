import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import { View } from 'react-native'

import Search from '../Search'

export default function Map() {
  const [region, getRegion] = useState({})

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        getRegion({ 
          latitude, 
          longitude, 
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        })

        console.log('region', region)

      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    )
    console.log(region)
  }, [])

  
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={region}
        showsUserLocation
        loadingEnabled
      />
      <Search />
    </View>
  )
}