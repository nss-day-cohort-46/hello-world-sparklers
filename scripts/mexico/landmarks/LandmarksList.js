import { useLandmarks } from './LandmarksDataProvider.js'
import { Landmarks } from './Landmarks.js'

export const LandmarksList = () => {
    const contentElement = document.querySelector(".countryContainer__landmarks")
    const landmarks = useLandmarks()
    let landmarksHTMLRepresentations = ""
    for (const landmark of landmarks) {
        landmarksHTMLRepresentations += Landmarks(landmark)
    }
    contentElement.innerHTML += `
        ${landmarksHTMLRepresentations}
    `
}

