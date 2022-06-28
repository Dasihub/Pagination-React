import React from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

const App = () => {
  const [countries, setCountries] = React.useState([])
  const [loader, setLoader] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [countriesPerPage] = React.useState(10)

  const getCountries = React.useCallback(async () => {
    try {
      setLoader(true)
      const {data} = await axios.get('https://restcountries.com/v3.1/all')
      setCountries(data)
      setLoader(false)
    } catch (e) {
      console.log(e)
    }
  }, [])

  React.useEffect(() => {
    getCountries()
  }, [])

  const lastCountryIndex = countriesPerPage * currentPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry =  countries.slice(firstCountryIndex, lastCountryIndex)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
      <div className="container mt-5">
        <h1 className="text-primary">Countries</h1>
        <Countries
            countries={currentCountry}
            loader={loader}
        />
        <Pagination
            countryPerPage={countriesPerPage}
            totalCountries={countries.length}
            paginate={paginate}
        />
        <button className="btn btn-primary" onClick={setCurrentPage.bind(null, pre => pre - 1)}>Prev page</button>
        <button className="btn btn-primary ml-2" onClick={setCurrentPage.bind(null, pre => pre + 1)}>Next page</button>
      </div>
  )
}

export default App