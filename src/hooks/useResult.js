import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [searchResults, setSearchResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = (searchData) => {
        yelp.get('/search', {
            params: {
                term: searchData,
                limit: 50,
                location: 'california'
            }
        })
            .then(res => {
                setSearchResults(res.data.businesses)
                console.log(res.data)
            })
            .catch(e => setErrorMessage('someting wrong'))
    }

    useEffect(() => {
        searchApi('pizza')
    }, [])

    return [searchApi, searchResults, errorMessage]
}