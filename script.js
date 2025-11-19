const form = document.getElementById("postForm");
const feed = document.getElementById("feed");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("titleInput").value;
  const desc = document.getElementById("descInput").value;
  const imgFile = document.getElementById("imgInput").files[0];
  
  const imgURL = URL.createObjectURL(imgFile);

  // par acrear una nueva card
  const card = document.createElement("div");
  card.classList.add("card", "m-3");
  card.style.width = "18rem";

  card.innerHTML = `
    <img src="${imgURL}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${desc}</p>
      <button class="like-btn btn btn-link">❤️ <span>0</span></button>
    </div>
  `;

  feed.appendChild(card);

  // Like independiente por card
  const likeBtn = card.querySelector(".like-btn");
  const likeCount = likeBtn.querySelector("span");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.add("liked");
    likeCount.textContent = Number(likeCount.textContent) + 1;
  });

  // limpiar formulario
  form.reset();
});
