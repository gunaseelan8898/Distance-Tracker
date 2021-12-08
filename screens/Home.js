import React from "react";
import {View,Text,Button,TextInput} from 'react-native'
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {GOOGle_MAPS_APIKEY} from '@env'
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";


const Home = props => { 
     
    const dispatch = useDispatch();

    return(
        <View style={styles.screen}>
            <GooglePlacesAutocomplete
            placeholder='where From ?'
            styles ={{
                container:{
                    flex:0
                },
                textInput:{
                    fontSize:20
                } 
            }} 
            onPress={(data,details = null) => {
               dispatch(setOrigin({
                   location:details.geometry.location,
                   description:data.description
               }))

               dispatch(setDestination(null))
                }}
            fetchDetails={true}
            minLength={2}
            returnKeyType={'search'}
            enablePoweredByContainer={false}
            query={{
                key: GOOGle_MAPS_APIKEY,
                language:'en'
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            
            />
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})