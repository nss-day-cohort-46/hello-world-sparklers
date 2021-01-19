const citiesCollection = [
    {
        name: "Cabo San Lucas",
        population: "1,000",
        image: "https://www.planetware.com/wpimages/2018/09/mexico-cabo-san-lucas-things-to-do-sunset-lands-end.jpg"
    },
    {
        name: "Mexico City",
        population: "1,000",
        image: "https://www.planetware.com/wpimages/2018/09/mexico-cabo-san-lucas-things-to-do-sunset-lands-end.jpg"
        
    },
    {
        name: "Guadalajara",
        population: "1,000",
        image: "https://www.planetware.com/wpimages/2018/09/mexico-cabo-san-lucas-things-to-do-sunset-lands-end.jpg"
    }

]

export const useCities = () => {
    return citiesCollection.slice()
}
