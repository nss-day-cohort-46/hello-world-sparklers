import { UseFooter } from './FooterDataProvider.js'
import { Footer } from './Footer.js';

export const FooterList = () => {
    const targetElement = document.querySelector("footer");
    const footerArray = UseFooter();

    let footerHTML = "";
    for (const footerElement of footerArray) {
        footerHTML += Footer(footerElement);
    }

    targetElement.innerHTML += footerHTML;
}
