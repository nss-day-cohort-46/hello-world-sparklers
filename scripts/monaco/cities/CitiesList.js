/**
 *  CitiesList which renders individual city objects as HTML
 */

import { useCities } from './CitiesDataProvider.js'
import { Cities } from './Cities.js'

export const CitiesList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".countryContainer__cities")
    const cities = useCities()

    let citiesHTMLRepresentations = ""
    for (const city of cities) {
        citiesHTMLRepresentations += Cities(city)

    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
        ${citiesHTMLRepresentations}
        
    `
}
