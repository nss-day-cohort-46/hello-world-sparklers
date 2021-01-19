export const Landmark = (landmark) => {
    return `
        <section class="landmarkCard">
            <img class="countryContainer__card-img" src="${landmark.image}"</div>
            <p class="countryContainer__card-name">
                <a href="https://en.wikipedia.org/wiki/Prince%27s_Palace_of_Monaco">${landmark.landmarkName}</a>
            </p>
        </section>
    `
}
