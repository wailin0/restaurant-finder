import React from "react";
import {View, TextInput, StyleSheet} from "react-native";
import {Feather} from '@expo/vector-icons'

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})

const SearchBar = ({search, setSearch, searchHandler}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                value={search}
                onChangeText={search => setSearch(search)}
                style={styles.inputStyle} placeholder='search'
                onEndEditing={() => searchHandler()}
            />
        </View>
    )
}

export default SearchBar