export const Home = (home) => {
    return `
        <article class="countryCard">
            <img class="countryCard__img" src="${home.image}"/>
            <div class="countryCard__details">
                    <ul>
                        <li>${home.country}</li>
                        <li>Capital: ${home.capital}</li>
                        <li>Population: ${home.population}</li>
                    </ul>
                </div>
            </article>
    `
}