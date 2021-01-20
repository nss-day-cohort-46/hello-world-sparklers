export const Celebrities = (celeb) => {
    return `
    <section class="countryContainer__card">
        <img class="countryContainer__card-img" src=${celeb.image}>
        <p class="countryContainer__card-name"><a href="${celeb.wiki}">${celeb.name}
        </a>
        </p>
    </section>`
}