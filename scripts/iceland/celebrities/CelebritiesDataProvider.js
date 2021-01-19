const celebritiesCollection = [
    {
        name: "Bjork, performing artist",
        image: "https://upload.wikimedia.org/wikipedia/en/7/77/Bj%C3%B6rk-Debut-1993.png",
        wiki: "https://en.wikipedia.org/wiki/Björk"
    },
    {
        name: "Jonsi, singer of Sigur Ros",
        image: "https://consequenceofsound.net/wp-content/uploads/2020/04/Jonsi-Announces-New-Solo-Music.png",
        wiki: "https://en.wikipedia.org/wiki/Jónsi"
    },
    {
        name: "Hafþór Júlíus Björnsson, actor",
        image: "https://www.etonline.com/sites/default/files/styles/max_970x546/public/images/2020-09/gettyimages-1140255019_1.jpg?h=1aff30ef&itok=TUzB0Mp3",
        wiki: "https://en.wikipedia.org/wiki/Hafþór_Júl%C3%ADus_Björnsson"
    }
]

export const useCelebrities = () => {
    return celebritiesCollection.slice()
}