let imgElt = document.createElement("img");
let url = "https://xkcd.now.sh/?comic=latest";


fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    imgElt.src = data.img;
    document.body.append(imgElt);
  })
  .catch(function (error) {
    console.log(error);
  });
