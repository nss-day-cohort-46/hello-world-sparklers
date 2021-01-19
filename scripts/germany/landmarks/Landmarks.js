export const Landmarks = (landmark) => {
    return `
    <article class="countryContainer__card">
        <img class="countryContainer__card-img" src="${landmark.image}" alt="">
        <p class="countryContainer__card-name">
            <a href="${landmark.wiki}">${landmark.name}</a>
        </p>
    </article>
    `
}