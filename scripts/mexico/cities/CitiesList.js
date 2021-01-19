import { useCities } from './CitiesDataProvider.js'
import { Cities } from './Cities.js'

export const CitiesList = () => {
    const contentElement = document.querySelector(".countryContainer__cities")
    const cities = useCities()
    let citiesHTMLRepresentations = ""
    for (const city of cities) {
        citiesHTMLRepresentations += Cities(city)
    }
    contentElement.innerHTML += `
        ${citiesHTMLRepresentations}
    `
}

