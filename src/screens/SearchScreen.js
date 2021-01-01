import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import useResult from "../hooks/useResult";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
    const [search, setSearch] = useState('')
    const [searchApi, searchResults, errorMessage] = useResult()

    const filterByPrice = (price) => {
        return searchResults.filter((result => result.price === price))
    }

    const searchHandler = () => {
        searchApi(search)
    }

    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
                searchHandler={searchHandler}
            />
            <Text>{errorMessage}</Text>
            <Text>We have found {searchResults.length} results</Text>
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterByPrice('$$$')}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen