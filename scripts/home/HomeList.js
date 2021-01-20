import { useHome } from './HomeDataProvider.js';
import { Home } from './Home.js';

export const HomeList = () => {

    const contentElement = document.querySelector(".contentContainer");
    const homes = useHome();

    let homeHTMLRepresentations = "";
    for (const home of homes) {
        homeHTMLRepresentations += Home(home);

    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += 
    homeHTMLRepresentations
}