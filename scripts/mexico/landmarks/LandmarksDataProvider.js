const landmarksCollection = [
    {
        image: "https://www.planetware.com/wpimages/2018/09/mexico-cabo-san-lucas-things-to-do-sunset-lands-end.jpg",
        name: "Cabo San Lucas Arch",
        wiki: "https://en.wikipedia.org/wiki/Cabo_San_Lucas"
    },
    {
        image: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2016/08/3229978861_47e4fd793d_o1.jpg",
        name: "Ángel de la Independencia",
        wiki: "https://en.wikipedia.org/wiki/Mexico_City",
        
    },
    {
        image: "https://digital.sandiego.edu/context/pcmexico/article/1086/type/native/viewcontent",
        name: "Guadalajara Cathedral",
        wiki: "https://en.wikipedia.org/wiki/Guadalajara",
    }

]

export const useLandmarks = () => {
    return landmarksCollection.slice()
}
