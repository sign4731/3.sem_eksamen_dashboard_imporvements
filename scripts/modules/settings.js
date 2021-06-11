export let settings = {
    url: "https://hold-kaeft-vi-har-det-godt.herokuapp.com/",
    hooks: {
        beerStockStatusList: document.querySelector(
            ".js-beer-stock-status-list"
        ),
        beerTapChart: document.querySelector(".js-beer-tap-chart"),
        beerTapXAxis: document.querySelector(".js-beer-tap-x-axis"),
        bartenderStatusList: document.querySelector(
            ".js-bartender-status-list"
        ),
        serverStatus: document.querySelector(".js-server-status"),
    },
    templates: {
        beerStock: document.querySelector(".t-beer-stock"),
        beerBar: document.querySelector(".t-beer-bar"),
        beerBubble: document.querySelector(".t-beer-bubble"),
        bartender: document.querySelector(".t-bartender"),
    },
    randomCustomers: [
        "Anders",
        "Fatma",
        "Sally",
        "August",
        "Vera",
        "Christian",
        "Noah",
        "Peter",
        "Dannie",
        "Jonas",
        "Andrea",
        "Caroline",
        "Tom",
        "Rasmus",
        "Gertrud",
        "Henning",
        "Mathias",
        "Ingrid",
        "Mustafa",
        "Marlon",
        "Deborah",
        "Zara",
        "Ming-Na",
    ],
    beerColors: {
        "Ruined Childhood": "#75b2ff",
        "El Hefe": "#ffda58",
        GitHop: "#553333",
        "Row 26": " #f85229",
        "Hollaback Lager": "#e8d2ae",
        "Hoppily Ever After": "#3ccb75",
        Sleighride: "#e072a4",
        Mowintime: "#3454d1",
        Steampunk: "#ff912d",
        "Fairy Tale Ale": "#ace365",
    },
    beerBubbles: {
        minBubbles: 3,
        maxBubbles: 8,
        minDuration: 2000,
        maxDuration: 8000,
        rangeDuration: 200,
        minDelay: 5000,
        maxDelay: 15000,
        rangeDelay: 100,
    },
    bartender: {
        tasks: {
            waiting: {
                text: "is waiting for new customers",
                showOrderId: false,
            },
            startServing: {
                text: "is serving order",
                showOrderId: true,
            },
            reserveTap: {
                text: "has reserved a tap",
                showOrderId: false,
            },
            pourBeer: {
                text: "is pouring beer for order",
                showOrderId: true,
            },
            releaseTap: {
                text: "is releasing a tap",
                showOrderId: false,
            },
            receivePayment: {
                text: "is receiving payment for order",
                showOrderId: true,
            },
            endServing: {
                text: "has ended serving for order",
                showOrderId: true,
            },
            replaceKeg: {
                text: "is replacing an empty keg",
                showOrderId: false,
            },
        },
        status: {
            WORKING: "Busy",
            READY: "Available",
        },
    },
};
