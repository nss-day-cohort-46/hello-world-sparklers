/**
 *  LocationList which renders individual blog objects as HTML
 */

import { useCelebrities } from './CelebritiesDataProvider.js';
import { Celebrity } from './Celebrities.js';

export const CelebrityList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".countryContainer__citizens");
    const celebrities = useCelebrities();

    let celebrityHTMLRepresentations = "";
    for (const celeb of celebrities) {
        celebrityHTMLRepresentations += Celebrity(celeb);

    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += 
    celebrityHTMLRepresentations
}