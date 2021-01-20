import { UseCelebrities } from './CelebritiesDataProvider.js';
import { Celebrities } from './Celebrities.js';

export const CelebritiesList = () => {
    const targetElement = document.querySelector(".countryContainer__citizens");
    const celebs = UseCelebrities();

    let celebsHTML = "";
    for (let celeb of celebs) {
        celebsHTML += Celebrities(celeb);
    }
    
    targetElement.innerHTML += celebsHTML;
}