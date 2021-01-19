const landmarksCollection = [
    {
        name: "Westfjords",
        image: "https://www.hostel.is/images/blogg/eszter/westfjords-3-days/westfjords-in-3-days-road-trip_7.jpg",
        wiki: "https://en.wikipedia.org/wiki/Westfjords"
    },
    {
        name: "Waterfall in Seljalandsfoss",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Iceland-14_%2829901935892%29.jpg/1920px-Iceland-14_%2829901935892%29.jpg",
        wiki: "https://en.wikipedia.org/wiki/Seljalandsfoss"
    },
    {
        name: "Blue Lagoon",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjTXvRIuXdy1EAvq2z_B3mlYBljPs4V-t2dg&usqp=CAU",
        wiki: "https://aviewoutside.com/wp-content/uploads/2019/05/shutterstock_497026894.jpg"
    },
]

export const useLandmarks = () => {
    return landmarksCollection.slice()
}