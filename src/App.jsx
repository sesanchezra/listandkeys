import CountryCard from "./components/CountryCard"
import Loader from "./components/Loader"
import useRestCountries from "./hooks/useRestCountries"
import './App.css'


function App() {

  const { countries, loading } = useRestCountries()

  console.log(countries)
  return (
    <div className="App">
      {
        loading ?
          <Loader />
        :
        countries?.map(country => (
          <CountryCard
            key={country?.altSpellings[0]}
            country={country}
          />
        ))
      }

    </div>
  )
}

export default App
