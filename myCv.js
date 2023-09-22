let myChart = document.getElementById("myChart").getContext("2d");

let massChart = new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: [
            "TypeScript",
            "Vue.js 3",
            "QUASAR",
            "HTML/CSS",
            "Storybook",
            "Git",
        ],
        datasets: [
            {
                label: "My time",
                data: [17, 17, 17, 17, 17, 17],
                backgroundColor: [
                    "#BF9ACA",
                    "white",
                    "#D9B8C4",
                    "#ECCFC3",
                    "#F49FBC",
                    "pink",
                ],
                fontColor: "black",
                borderColor: "transparent",
                hoverBorderWidth: 1,
                hoverBorderColor: "black",
            },
        ],
    },

    options: {
        cutout: 55,
        plugins: {
            legend: {
                position: "right",
                labels: {
                    padding: 15,
                    color: "black",
                    font: {
                        size: 16,
                        family: "Catamaran",
                        color: "black",
                    },
                },
            },
        },
    },
});
