const likeBtn = document.querySelector(".like-btn");
const likeCount = document.querySelector(".like-btn span");

likeBtn.addEventListener("click", () => {
  likeBtn.classList.add("liked");

  let n = Number(likeCount.textContent);
  likeCount.textContent = n + 1; 
});
