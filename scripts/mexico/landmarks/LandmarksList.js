import { useLandmarks } from './LandmarksDataProvider.js'
import { Cities } from './Cities.js'

export const LandmarksList = () => {
    const contentElement = document.querySelector(".countryContainer__landmarks")
    const landmarks = useLandmarks()
    let landmarksHTMLRepresentations = ""
    for (const landmark of landmarks) {
        landmarkHTMLRepresentations += Landmarks(landmark)
    }
    contentElement.innerHTML += `
        ${landmarksHTMLRepresentations}
    `
}

