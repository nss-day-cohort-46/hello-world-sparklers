const citiesCollection = [
    {
        name: "Berlin",
        population: "3.645.000",
        image: 'https://images.unsplash.com/photo-1560930950-5cc20e80e392?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    },
    {
        name: "Munich",
        population: "1.472.000",
        image: 'https://images.unsplash.com/photo-1518290581883-8a26c3735cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=8'
    },
    {
        name: "Hamburg",
        population: "1.841.000",
        image: 'https://images.unsplash.com/photo-1598790969148-62630087609e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=8'
    }
]

export const UseCities = () => {
    return [...citiesCollection];
}