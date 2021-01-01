import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer pKru1nee5cu25mpwuG9RK5rKRXuAxAPLGCwL4nxUDJGBuEozqCtIHRG4_Aa0Ssl4YnuIri4mkO5Ll6Ei9o6TKp-dHK3Y0xXEtoprgmOQvhbRdXChUlhHxLUQAUbvX3Yx'
    }
})

