export const Cities = (city) => {
    return `
    <article class="cityCard">
        <img src="${city.image}" alt"" class="cityCard__img">
        <p class="cityCard__name">${city.name}</p>
        <p class="cityCard__population">${city.population}</p>
    </article>`
}

