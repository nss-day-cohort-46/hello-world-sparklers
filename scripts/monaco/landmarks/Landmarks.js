export const Landmark = (landmark) => {
    return `
        <section class="landmarkCard">
            <img class="countryContainer__card-img" src="${landmark.image}"</div>
            <div class="landmarksHead__name">
                <a href="${landmark.wiki}">${landmark.landmarkName}</a>
            </div>
        </section>
    `
}
