// TO-DO LIST
function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("taskList");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.textContent = input.value;
  list.appendChild(li);

  input.value = "";
}

// TIMER
let time = 1500;
let timer;

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
      `${min}:${sec < 10 ? "0" : ""}${sec}`;

    time--;

    if (time < 0) {
      clearInterval(timer);
      alert("Time's up!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  time = 1500;
  document.getElementById("timer").innerText = "25:00";
}

// QUOTES
let quotes = [
  "Stay focused and never give up!",
  "Small progress is still progress.",
  "Consistency beats motivation.",
  "Work hard in silence, let success speak."
];

function newQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}
