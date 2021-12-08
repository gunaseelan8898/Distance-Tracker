import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';

const NavigateCard = () => {

    const dispatch = useDispatch();

    const navigation = useNavigation()

    return (
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
            <Text style={{paddingTop:5,alignSelf:'center',fontWeight:'bold'}}>Hey HI</Text>
            <View style={{borderRadius:5,backgroundColor:'grey',height:400,width:'100%',alignSelf:'center'}}>
                <View>
                    <GooglePlacesAutocomplete 
                    placeholder='Where To'
                    style={{padding:20,fontSize:20,backgroundColor:'grey'}}
                    fetchDetails={true}
                    returnKeyType={'search'}
                    minLength={2}
                    onPress={(data,details=null)=>{
                        dispatch(setDestination({
                            location:details.geometry.location,
                            description:data.description
                        }))
                        navigation.navigate('RideOptions')
                    }}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language:'en'
                    }}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    debounce={400}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
