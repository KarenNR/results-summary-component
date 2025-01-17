import data from './data.json' with { type: 'json' };

for (let element of data) {
    // Statistic container
    var statistic = document.createElement("div");
    statistic.classList.add("statistic", element.category.toLowerCase() + "-bg", "mb-3");

    // Title
    var title = document.createElement("h6");
    title.classList.add("my-0", element.category.toLowerCase() + "-title");
    title.innerHTML = `
    <img src="${element.icon}" alt="reaction" class="mr-2" />
    ${element.category}`;

    // Score
    var score = document.createElement("p");
    score.classList.add("my-0", "font-weight-bold");
    score.innerHTML = `${element.score} <span class="score">/ 100</span>`;

    statistic.appendChild(title);
    statistic.appendChild(score);

    document.getElementById("summary").appendChild(statistic);
} 