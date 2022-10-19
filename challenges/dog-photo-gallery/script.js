let imagesContainer = document.querySelector(".images-container");
let addBtn = document.querySelector(".add-btn");
let deleteBtn = document.querySelector(".delete-btn");
let url = "https://dog.ceo/api/breeds/image/random";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

function getImage() {
  let itemElt = document.createElement("li");
  let imgElt = document.createElement("img");
  itemElt.className = "image-item";
  imgElt.className = "image";
  fetch(url)
    .then((response) => handleErrors(response))
    .then((data) => {
      imgElt.src = data.message;
      itemElt.append(imgElt);
      imagesContainer.append(itemElt);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function deleteImage() {
  let images = document.querySelectorAll(".image-item");
  let lastImg = images[images.length - 1];
  imagesContainer.removeChild(lastImg);
}

addBtn.addEventListener("click", () => getImage());
deleteBtn.addEventListener("click", () => deleteImage());
