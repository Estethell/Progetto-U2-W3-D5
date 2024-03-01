const url = "https://striveschool-api.herokuapp.com/api/product/";

const objId = new URLSearchParams(window.location.search).get("id");

const btnSubmit = document.querySelector(".btnSubmit");
const btnReset = document.querySelector(".btnReset");
const form = document.querySelector(".form");

const handleBtn = () => {
  const nuovoProdotto = {
    name: document.getElementById("nameInput").value,
    description: document.getElementById("descrizione").value,
    brand: document.getElementById("brandInput").value,
    imageUrl: document.getElementById("imgInput").value,
    price: document.getElementById("prezzoInput").value,
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(nuovoProdotto),
    headers: {
      "Content-Type": "application/json",
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
    .then((nuovoProdotto) => {
      alert("Articolo: " + nuovoProdotto._id + " è stato caricato correttamente");
      form.reset();
    })
    .catch((errore) => console.log(errore));
};

const handleReset = () => {
  confirm("Sei sicuro di voler ricominciare da capo?");
  form.reset();
};

const getFetch = (objId) => {
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
      console.log(object);
      document.getElementById("nameInput").value = object.name;
      document.getElementById("descrizione").value = object.description;
      document.getElementById("brandInput").value = object.brand;
      document.getElementById("imgInput").value = object.imageUrl;
      document.getElementById("prezzoInput").value = object.price;
    })
    .catch((errore) => console.log(errore));
};

const handleBtnPut = () => {
  const nuovoProdotto = {
    name: document.getElementById("nameInput").value,
    description: document.getElementById("descrizione").value,
    brand: document.getElementById("brandInput").value,
    imageUrl: document.getElementById("imgInput").value,
    price: document.getElementById("prezzoInput").value,
  };

  fetch(url + objId, {
    method: "PUT",
    body: JSON.stringify(nuovoProdotto),
    headers: {
      "Content-Type": "application/json",
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
    .then((nuovoProdotto) => {
      alert("Articolo: " + nuovoProdotto._id + " è stato modificato correttamente");
      form.reset();
    })
    .catch((errore) => console.log(errore));
};

const delitto = () => {
  fetch(url + objId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYWE1ZjRjNTllYzAwMTk5MGQ3NTMiLCJpYXQiOjE3MDkyODgwMzEsImV4cCI6MTcxMDQ5NzYzMX0.Jy6Ywl10HXnDjfRttbdwyoLpijEvD3Tqy6bRwhUDULk",
    },
  });
};

window.onload = () => {
  if (objId) {
    getFetch(objId);
    btnSubmit.innerText = "Modifica";
    btnReset.innerText = "Cancella";
    btnReset.classList.add("bg-danger");
    btnSubmit.addEventListener("click", () => {
      handleBtnPut();
    });
    btnReset.addEventListener("click", () => {
      delitto();
      handleReset();
    });
  } else {
    btnSubmit.addEventListener("click", () => {
      handleBtn();
    });
    btnReset.addEventListener("click", () => {
      handleReset();
    });
  }
};
