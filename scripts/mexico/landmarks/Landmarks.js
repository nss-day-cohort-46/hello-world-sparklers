export const Landmarks = (landmark) => {
    return `
    <article class="cityCard">
        <img src="${landmark.image}" alt"" class="cityCard__img">
        <p class="cityCard__name">${landmark.name}</p>
        <p class="cityCard__population">${landmark.wiki}</p>
    </article>`
}

