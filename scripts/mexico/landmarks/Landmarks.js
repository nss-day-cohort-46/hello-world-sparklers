export const Landmarks = (landmark) => {
    return `
    <article class="countryContainer__card">
        <img src="${landmark.image}" alt"" class="countryContainer__card-img">
        <p class="countryContainer__card-name"><a  href="${landmark.wiki}">${landmark.name}</a></p>
    </article>`
}

