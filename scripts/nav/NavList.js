import { UseNav } from './NavDataProvider.js';
import { Nav } from './Nav.js';

export const NavList = () => {
    const targetElement = document.querySelector("nav");
    const navArray = UseNav();

    let navHTML = "";
    for (const navElement of navArray) {
        navHTML += Nav(navElement);
    }

    targetElement.innerHTML += navHTML;
}