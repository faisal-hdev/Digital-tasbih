//Subhan Allah content
const subhanAllahCountElement = document.getElementById("subhan-allah-count");
const subhanAllahIncrementBtn = document.getElementById(
  "subhan-allah-increment-btn"
);
const subhanAllahDecrementBtn = document.getElementById(
  "subhan-allah-decrement-btn"
);
//Alhamdulilah content
const alhamdulilahCountElement = document.getElementById("alhamdulilah-count");
const alhamdulilahIncrementBtn = document.getElementById(
  "alhamdulilah-increment-btn"
);
const alhamdulilahDecrementBtn = document.getElementById(
  "alhamdulilah-decrement-btn"
);
// Allahuakber content
const allahuakberCountElement = document.getElementById("allahuakber-count");
const allahuakberIncrementBtn = document.getElementById(
  "allahuakber-increment-btn"
);
const allahuakberDecrementBtn = document.getElementById(
  "allahuakber-decrement-btn"
);
// Reset All Tasbih
const restAllBtn = document.getElementById("all-reset-btn");

let subhanAllahCountInitial = 0;
let alhamdulilahCountInitial = 0;
let allahuakberCountInitial = 0;

subhanAllahIncrementBtn.addEventListener("click", function () {
  if (subhanAllahCountInitial === 33) {
    return alert("Subhan Allah Complete. Please FillUp another one");
  }
  subhanAllahCountInitial += 1;
  subhanAllahCountElement.innerText = subhanAllahCountInitial;
});
subhanAllahDecrementBtn.addEventListener("click", function () {
  if (subhanAllahCountInitial === 0) {
    return alert("You can't added negative value");
  }
  subhanAllahCountInitial -= 1;
  subhanAllahCountElement.innerText = subhanAllahCountInitial;
});
alhamdulilahIncrementBtn.addEventListener("click", function () {
  if (alhamdulilahCountInitial === 33) {
    return alert("Alhamdulilah Complete. Please FillUp another one");
  }
  alhamdulilahCountInitial += 1;
  alhamdulilahCountElement.innerText = alhamdulilahCountInitial;
});
alhamdulilahDecrementBtn.addEventListener("click", function () {
  if (alhamdulilahCountInitial === 0) {
    return alert("You can't added negative value");
  }
  alhamdulilahCountInitial -= 1;
  alhamdulilahCountElement.innerText = alhamdulilahCountInitial;
});
allahuakberIncrementBtn.addEventListener("click", function () {
  if (allahuakberCountInitial === 33) {
    return alert("Allahuakber Complete. Please FillUp another one");
  }
  allahuakberCountInitial += 1;
  allahuakberCountElement.innerText = allahuakberCountInitial;
});
allahuakberDecrementBtn.addEventListener("click", function () {
  if (allahuakberCountInitial === 0) {
    return alert("You can't added negative value");
  }
  allahuakberCountInitial -= 1;
  allahuakberCountElement.innerText = allahuakberCountInitial;
});

restAllBtn.addEventListener("click", function () {
  allahuakberCountElement.innerText = 0;
  subhanAllahCountElement.innerText = 0;
  alhamdulilahCountElement.innerText = 0;
  subhanAllahCountInitial = 0;
  alhamdulilahCountInitial = 0;
  allahuakberCountInitial = 0;
});
