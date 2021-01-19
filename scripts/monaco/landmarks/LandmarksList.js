/**
 *  LocationList which renders individual blog objects as HTML
 */

import { useLandmarks } from './LandmarksDataProvider.js'
import { Landmark } from './Landmarks.js'

export const LandmarkList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".landmarksHead")
    const landmarks = useLandmarks()

    let landmarkHTMLRepresentations = ""
    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += Landmark(landmark)

    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        
        ${landmarkHTMLRepresentations}
        
    `
}
