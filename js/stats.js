const items = JSON.parse(localStorage.getItem("items")) || [];

const categories = {};

items.forEach(item => {

categories[item.category] =
(categories[item.category] || 0) + 1;

});

new Chart(document.getElementById("chart"), {

type: "doughnut",

data: {

labels: Object.keys(categories),

datasets: [{

data: Object.values(categories),

backgroundColor: [
"#22c55e",
"#3b82f6",
"#f59e0b",
"#a855f7"
]

}]

}

});