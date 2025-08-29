const age = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // Validation: EXACT string Cypress expects (no period)
  if (age.value === "" || nameInput.value === "") {
    alert("Please enter valid details");
    return; // important: don't proceed to the promise
  }

  // Promise with 4s delay
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const ageNum = parseInt(age.value, 10);
      if (ageNum > 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  })
    .then((msg) => alert(msg))
    .catch((err) => alert(err));
});
