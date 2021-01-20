const homeCollection = [
    {
        image:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        country: "Germany",
        capital: "Berlin",
        population: "83 million"
    },
    {
        image:"https://classicjourneys--c.na84.content.force.com/servlet/servlet.ImageServer?id=0151T0000041PnZ&oid=00D50000000JMrK&lastMod=1592339915000",
        country: "Iceland",
        capital: "Rekjavík",
        population: "357 thousand"
    },
    {
        image:"https://specials-images.forbesimg.com/imageserve/5ecd3cd9cafaec0006c6f234/960x0.jpg?fit=scale",
        country: "Mexico",
        capital: "Mexico City",
        population: "126.2 million"
    },
    {
        image:"https://www.cruisetradenews.com/wp-content/uploads/2018/10/monaco-3003996_1280.jpg",
        country: "Monaco",
        capital: "None",
        population: "39000"
    }
]

export const useHome = () => {
    return homeCollection.slice()
}