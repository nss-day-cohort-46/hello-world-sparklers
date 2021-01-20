export const Celebrity = (celebrity) => {
    return `
        <article class="countryContainer__card">
            <img class="countryContainer__card-img" src="${celebrity.image}"</div>
            <p class="countryContainer__card-name">
                <a href="${celebrity.wiki}">${celebrity.name}</a>
            </p>
        </article>
    `
}