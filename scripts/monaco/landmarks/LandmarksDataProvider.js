const landmarkCollection = [
    {
        image:"https://previews.123rf.com/images/amoklv/amoklv1402/amoklv140200083/25855946-view-of-the-monte-carlo-casino-and-opera-house-monaco.jpg",
        landmarkName: "Monaco Opera House"
    },
    {
        image:"https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/03/5895051689_daf0450b07_b-1024x680.jpg",
        landmarkName: "Prince's Palace"
    },
    {
        image:"https://previews.123rf.com/images/amoklv/amoklv1402/amoklv140200083/25855946-view-of-the-monte-carlo-casino-and-opera-house-monaco.jpg",
        landmarkName: "Monte-Carlo Casino"
    }

]

export const useLandmarks = () => {
    return landmarkCollection.slice()
}
