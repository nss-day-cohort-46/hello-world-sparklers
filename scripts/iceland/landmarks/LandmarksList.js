import { useLandmarks } from './LandmarksDataProvider.js'
import { Landmarks } from './Landmarks.js'

export const LandmarksList = () => {
    const contentElement = document.querySelector(".countryContainer__landmarks")
    const landmarks = useLandmarks()

    let landmarksHTMLRepresentation = ""
    
    for (const coolspot of landmarks) {
        landmarksHTMLRepresentation += Landmarks(coolspot)
    }

    contentElement.innerHTML += 
        `${landmarksHTMLRepresentation}`
}