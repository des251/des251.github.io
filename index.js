window.onload = function () {
  highlightDay();
};

function highlightDay() {
  const day = new Date().getDate();
  const days = document.querySelectorAll(".day");

  for (let i = 0; i < days.length; i++) {
    if (parseInt(days[i].innerHTML) === day) {
      days[i].classList.add("today");
    }
  }
}

function addDayName() {
  const names = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
}
