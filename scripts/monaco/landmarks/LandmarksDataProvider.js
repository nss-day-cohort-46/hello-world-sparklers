const landmarkCollection = [
    {
        image:"https://previews.123rf.com/images/amoklv/amoklv1402/amoklv140200083/25855946-view-of-the-monte-carlo-casino-and-opera-house-monaco.jpg",
        landmarkName: "Monaco Opera House",
        wiki: "https://en.wikipedia.org/wiki/Op%C3%A9ra_de_Monte-Carlo"
    },
    {
        image:"https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/03/5895051689_daf0450b07_b-1024x680.jpg",
        landmarkName: "Prince's Palace",
        wiki: "https://en.wikipedia.org/wiki/Prince%27s_Palace_of_Monaco"
    },
    {
        image:"https://previews.123rf.com/images/amoklv/amoklv1402/amoklv140200083/25855946-view-of-the-monte-carlo-casino-and-opera-house-monaco.jpg",
        landmarkName: "Monte-Carlo Casino",
        wiki: "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/03/4930037132_cbe33d2071_b-1024x681.jpg"
    }

]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}
