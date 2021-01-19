export const Cities = (city) => {
    return `
        <article class="cityCard">
            <div class="cityCard__name">${city.name}</div>
            <div class="cityCard__population">${city.population}</div>
            <img class="cityCard__img" src="${city.image}" />
        </article>
    `
}