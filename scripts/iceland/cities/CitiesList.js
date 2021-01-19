import { useCities } from './CitiesDataProvider.js'
import { City } from './Cities.js'

export const CitiesList = () => {
    const contentElement = document.querySelector(".countryContainer__cities")
    const cities = useCities()
    
    let citiesHTMLRepresentation = ""
    for (const city of cities) {
        citiesHTMLRepresentation += City(city)
    }
        
    contentElement.innerHTML += 
        `${citiesHTMLRepresentation}`
    
}