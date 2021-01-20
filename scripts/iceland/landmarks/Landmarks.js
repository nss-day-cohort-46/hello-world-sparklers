export const Landmarks = (landmark) => {
    return `
    <section class="countryContainer__card">
        <img class="countryContainer__card-img" src="${landmark.image}">
        <p class="countryContainer__card-name">
            <a href="${landmark.wiki}">${landmark.name}</a>
        </p>
    </section>
    `
}