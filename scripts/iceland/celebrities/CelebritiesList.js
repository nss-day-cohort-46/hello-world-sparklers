import { Celebrities } from './Celebrities.js'
import { useCelebrities } from './CelebritiesDataProvider.js'


export const CelebritiesList = () => {
    const contentElement = document.querySelector(".celebsGoHere")
    const celebrities = useCelebrities()
    
    let celebHTMLRepresentation = ""
    for (const celeb of celebrities) {
        celebHTMLRepresentation += Celebrities(celeb)
    }

    contentElement.innerHTML += `
    ${celebHTMLRepresentation}
    `
}