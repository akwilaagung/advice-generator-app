const adviceId = document.getElementById("id");
const adviceData = document.getElementById("advice");
const dice = document.getElementById("dice");
const button = document.getElementById("button");

function fetchData() {
  fetch("https://api.adviceslip.com/advice", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        adviceId.innerHTML = data.slip.id;
        adviceData.innerHTML = data.slip.advice;
        button.disabled = false;
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchData();
