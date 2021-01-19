const citiesCollection = [
    {
        name: "Reykjavik",
        population: "1,000",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3whN15Xd0MRLZG4CRnYwHt9S7ctjCW1b4Cw&usqp=CAU"
    },
    {
        name: "Akureyri",
        population: "1,000",
        image: "https://www.asherworldturns.com/wp-content/uploads/2016/01/IMG_6722.jpg"
    },
    {
        name: "Hafnarfirði",
        population: "1,000",
        image: "https://c8.alamy.com/comp/MY1KJ7/hafnarfjordur-suburb-of-reykjavik-iceland-MY1KJ7.jpg"
    },
    
]

export const useCities = () => {
    return citiesCollection.slice()
}