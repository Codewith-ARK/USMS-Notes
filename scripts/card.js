function createCard(details) {
  const card = 
  `
    <a href="${details.link}" target="_blank">
    <div class="card">
      <img src="${details.img}" alt="thumbnail image">
      <p class="heading">${details.name}</p>
      <p class="timestamp">Last updated: ${details.dateModified}</p>
    </div>
  </a>
  `;
  renderCard(card);
}

function renderCard(card) {
  document.querySelector("main").innerHTML += card;
  console.log("New card just rendered.");
}