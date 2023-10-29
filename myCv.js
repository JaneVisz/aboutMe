let myChart = document.getElementById("myChart").getContext("2d");

let massChart = new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: [
            "TypeScript",
            "Vue.js 3",
            "QUASAR",
            "Storybook",
            "Git",
        ],
        datasets: [
            {
                label: "My time",
                data: [20, 20, 20, 20, 20],
                backgroundColor: [
                    "#BF9ACA",
                    "#35358B",
                    "#F36E21",
                    "#FCD53F",
                    "#708AAF",
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
