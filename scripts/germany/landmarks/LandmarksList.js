import { UseLandmarks } from './LandmarksDataProvider.js';
import { Landmarks } from './Landmarks.js';

export const LandmarksList = () => {
    const targetElement = document.querySelector(".countryContainer__landmarks");
    const landmarks = UseLandmarks();

    let landmarkHTML = "";
    for (const landmark of landmarks) {
        landmarkHTML += Landmarks(landmark);
    }

    targetElement.innerHTML += landmarkHTML;
}