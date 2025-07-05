fetch("index.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("app-list");
    data.apps.forEach(app => {
      const card = document.createElement("div");
      card.className = "app-card";
      card.innerHTML = `
        <img src="${app.icon}" alt="${app.name}" />
        <h2>${app.name}</h2>
        <p>${app.description}</p>
        <a href="${app.url}" target="_blank">Avvia</a>
      `;
      container.appendChild(card);
    });
  });