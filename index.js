const url = "https://striveschool-api.herokuapp.com/api/product/";

const imgCard = document.querySelectorAll("img");
const nameCard = document.querySelectorAll("h4");
const brandCard = document.querySelectorAll(".brandCard");
const priceCard = document.querySelectorAll(".priceCard");
const btnMod = document.querySelectorAll(".btnMod");
const btnFind = document.querySelectorAll(".btnFind");
const card = document.querySelectorAll(".card");

fetch(url, {
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
      throw new Error("Thank you Mario! But our princess is in another castle!");
    }
  })
  .then((prodotti) => {
    imgCard.forEach((x, i) => {
      x.src = prodotti[i].imageUrl;
      x.style.height = "250px";
    });

    nameCard.forEach((x, i) => {
      x.innerText = prodotti[i].name;
    });

    brandCard.forEach((x, i) => {
      x.innerText = prodotti[i].brand;
    });

    priceCard.forEach((x, i) => {
      x.innerText = prodotti[i].price + "€";
    });

    btnMod.forEach((x, i) => {
      x.href = "./backoffice.html?id=" + prodotti[i]._id;
    });

    btnFind.forEach((x, i) => {
      x.href = "./dettagli.html?id=" + prodotti[i]._id;
    });

    card.forEach((i) => {
      if (i.querySelector("h4").innerText === "Nome") {
        console.log(i.querySelector("h4").innerText);
        i.remove();
      }
    });
  })
  .catch((errore) => console.log(errore));

const handleReset = () => {
  confirm("Sei sicuro di voler ricominciare da capo?");
  form.reset();
};
