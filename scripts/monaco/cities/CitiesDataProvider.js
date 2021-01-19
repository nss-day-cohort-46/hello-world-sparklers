const citiesCollection = [
    {
        city: "Monaco City",
        population: "1234",
        image:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Fuerstenhof_zu_Monaco.jpg" alt="Monaco City" class="cityCard__img"
    },
    {
        city: "Monte Carlo",
        population: "1234",
        image:"https://rivierabarcrawltours.com/wp-content/uploads/2020/04/monaco-vs-monte-carlo.pic-1-1.jpg" alt="Monte Carlo" class="cityCard__img"
    },
    {
        city: "Monaco City",
        population: "1234",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Monaco_-_Port_en_d%C3%A9cembre.jpg/1024px-Monaco_-_Port_en_d%C3%A9cembre.jpg" alt="La Condamine" class="cityCard__img"
    }

]

export const useCities = () => {
    return citiesCollection.slice()
}
