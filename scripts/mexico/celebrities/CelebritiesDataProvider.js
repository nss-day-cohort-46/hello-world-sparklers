const celebritiesCollection = [
    {
        name: "Guillermo del Toro",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Guillermo_del_Toro_in_2017.jpg/220px-Guillermo_del_Toro_in_2017.jpg",
        wiki: "https://en.wikipedia.org/wiki/Guillermo_del_Toro"
    },
    {
        name: "Salma Hayek",
        image: "https://www.maxim.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3Nzc1MjUxODM1NDYyNjYx/salma-hayek-promo.jpg",
        wiki: "https://en.wikipedia.org/wiki/Salma_Hayek"
        
    },
    {
        name: "Javier Hernández",
        image: "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2014%2F0626%2Fsoc_g_hernandez_d1_1296x729.jpg",
        wiki: "https://en.wikipedia.org/wiki/Javier_Hern%C3%A1ndez"
    }

]

export const useCelebrities = () => {
    return celebritiesCollection.slice()
}
