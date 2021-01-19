export const Landmark = (landmark) => {
    return `
        <article class="countryContainer__card">
            <img class="countryContainer__card-img" src="${landmark.image}"</div>
            <p class="countryContainer__card-name">
                <a href="${landmark.wiki}">${landmark.landmarkName}</a>
            </p>
        </section>
    `
}
