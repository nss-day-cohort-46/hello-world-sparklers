import { useCelebrities } from './CelebritiesDataProvider.js'
import { Celebrities } from './Celebrities.js'

export const CelebritiesList = () => {
    const contentElement = document.querySelector(".countryContainer__citizens")
    const celebrities = useCelebrities()
    let celebritiesHTMLRepresentations = ""
    for (const celeb of celebrities) {
        celebritiesHTMLRepresentations += Celebrities(celeb)
    }
    contentElement.innerHTML += `
        ${celebritiesHTMLRepresentations}
    `
}

