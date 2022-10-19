let imagesContainer = document.querySelector(".images-container");
let addBtn = document.querySelector(".add-btn");
let deleteBtn = document.querySelector(".delete-btn");
let url = "https://dog.ceo/api/breeds/image/random";

function getImage() {
  let itemElt = document.createElement("li");
  let imgElt = document.createElement("img");
  imgElt.className = "image";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      imgElt.src = data.message;
      itemElt.append(imgElt);
      imagesContainer.append(itemElt);
    });
}
addBtn.addEventListener("click", () => getImage());
