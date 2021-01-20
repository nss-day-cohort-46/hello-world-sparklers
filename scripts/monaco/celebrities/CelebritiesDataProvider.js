const celebrityCollection = [
    {
        image:"https://i.f1g.fr/media/madame/1900x1900/sites/default/files/img/2020/09/georges-vigarello.jpg",
        name: "Georges Vigarello",
        wiki: "https://en.wikipedia.org/wiki/Georges_Vigarello"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Louis_Chiron_1931.jpg/245px-Louis_Chiron_1931.jpg",
        name: "Louis Chiron",
        wiki: "https://en.wikipedia.org/wiki/Louis_Chiron"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Olivier_Beretta_2012_WEC_Fuji.jpg/250px-Olivier_Beretta_2012_WEC_Fuji.jpg",
        name: "Olivier Beretta",
        wiki: "https://en.wikipedia.org/wiki/Olivier_Beretta"
    }

]

export const useCelebrities = () => {
    return celebrityCollection.slice()
}