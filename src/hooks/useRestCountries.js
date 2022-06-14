import { useEffect, useState } from "react"
import axios from "axios"

const useRestCountries = () => {

    const [countries, setCountries] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://restcountries.com/v3.1/region/south america`)
            .then(res => {
                setCountries(res.data)
                setLoading(!loading)
                })
            .catch(error => console.log(error))
    }, [])

    return {countries,loading}
}

export default useRestCountries
