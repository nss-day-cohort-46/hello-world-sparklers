import { Cities } from './Cities.js';
import { UseCities } from './CitiesDataProvider.js';

export const CitiesList = () => {
    const targetElement = document.querySelector(".countryContainer__cities");
    const cities = UseCities();
    let citiesHTML = "";
    for (const city of cities) {
        citiesHTML += Cities(city);
    }
    targetElement.innerHTML += citiesHTML;
}
