export const Landmarks = (landmark) => {
    `
    <section class="countryContainer__card">
        <p class="countryContainer__card-img">${landmark.image}</p>
        <p class="countryContainer__card-name">
            <a href=${landmark.wiki}>${landmark.name}</a>
        </p>
    </section>
    `
}