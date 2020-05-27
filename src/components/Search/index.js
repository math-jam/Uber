import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

export default function Search() {
  return (
    <GooglePlacesAutocomplete
      placeholderTextColor="#333"
      placeholder="Para onde?"
      onPress={() => {}}
      query={{
        key: "AIzaSyA_Di5bZUjtTkoxze9xvwsaGYWAVh2a5f4",
        language: "pt-BR"
      }}
      textInputProps={{
        autoCapitalize: "none",
      }}
      fetchDetails
    />
  )
}