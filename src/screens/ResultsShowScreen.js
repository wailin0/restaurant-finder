import {Text, View, StyleSheet, FlatList, Image} from "react-native";
import React, {useEffect, useState} from "react";
import yelp from "../api/yelp";

const ResultsShowScreen = ({route}) => {
    const {id} = route.params
    const [resultData, setResultData] = useState(null)

    useEffect(() => {
        yelp.get(`/${id}`)
            .then(res => setResultData(res.data))
            .catch(e => setResultData(e.message))
    }, [])

    console.log(resultData)

    if(!resultData){
        return null
    }

    return (
        <View style={{marginTop: 10}}>
            <Text>{resultData.name}</Text>
            <Text>{resultData.phone}</Text>
            <Text>{resultData.location.address1}, {resultData.location.city}, {resultData.location.country}</Text>
            <FlatList
                data={resultData.photos}
                keyExtractor={photo => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginTop: 10
    }
})

export default ResultsShowScreen