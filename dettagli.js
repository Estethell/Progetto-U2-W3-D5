const url = "https://striveschool-api.herokuapp.com/api/product/";

const objId = new URLSearchParams(window.location.search).get("id");
const cardBody = document.querySelector(".card-body");

const getFetch = () => {
  fetch(url + objId, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWE1ZjRjNTllYzAwMTk5MGQ3NTMiLCJpYXQiOjE3MDkyODgwMzEsImV4cCI6MTcxMDQ5NzYzMX0.Jy6Ywl10HXnDjfRttbdwyoLpijEvD3Tqy6bRwhUDULk",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore: Thank you Mario! But our princess is in another castle!");
      }
    })
    .then((object) => {
      let img = document.createElement("img");
      img.src = object.imageUrl;
      img.classList.add("card-image");
      let descrizione = document.createElement("p");
      descrizione.innerText = object.description;
      descrizione.classList.add("border", "border-2", "p-5", "rounded-4", "border-info");
      let nome = document.createElement("h2");
      nome.innerText = object.name;
      nome.classList.add("text-danger");
      let brand = document.createElement("h4");
      brand.innerText = object.brand;
      let price = document.createElement("p");
      price.innerText = object.price + "€";
      price.classList.add("font-monospace");

      cardBody.appendChild(img);
      cardBody.appendChild(nome);
      cardBody.appendChild(brand);
      cardBody.appendChild(price);
      cardBody.appendChild(descrizione);
    })
    .catch((errore) => console.log(errore));
};

window.onload = () => {
  getFetch();
};
