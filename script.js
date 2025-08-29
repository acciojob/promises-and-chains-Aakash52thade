const age = document.getElementById("age");
const nameInput = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  // ✅ Validation
  if (age.value === "" || nameInput.value === "") {
    alert("Please enter valid details.");
    return; // stop further execution
  }

  // ✅ Promise Logic
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age.value) > 18) {
        resolve(`Welcome, ${nameInput.value}. You can vote.`);
      } else {
        reject(`Oh sorry ${nameInput.value}. You aren't old enough.`);
      }
    }, 4000);
  });

  // ✅ Handle promise resolution/rejection
  votePromise
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
