export const Celebrities = (celeb) => {
    return `
    <article class="countryContainer__card">
        <img class="countryContainer__card-img" src="${celeb.image}" alt="">
        <p class="countryContainer__card-name">
            <a href="${celeb.wiki}">${celeb.name}</a>
        </p>
    </article>`
}