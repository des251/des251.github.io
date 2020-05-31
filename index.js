window.onload = function () {
  highlightDay();
};

function createMonth() {}

function highlightDay() {
  const day = new Date().getDate();
  const days = document.querySelectorAll(".day");

  for (let i = 0; i < days.length; i++) {
    if (parseInt(days[i].innerHTML) === day) {
      days[i].classList.add("today");
    }
  }
}

function addDayName(day) {
  let result = "";
  switch (day) {
    case 0:
      result = "вс";
      break;
    case 1:
      result = "пн";
      break;
    case 2:
      result = "вт";
      break;
    case 3:
      result = "ср";
      break;
    case 4:
      result = "чт";
      break;
    case 5:
      result = "пт";
      break;
    case 6:
      result = "сб";
      break;
    default:
      alert("Нет таких дней в неделе");
  }
  return result;
}

function getDaysInMonth(month, year) {
  var date = new Date(year, month, 1);
  var days = 0;
  while (date.getMonth() === month) {
    days++;
    date.setDate(date.getDate() + 1);
  }
  return days;
}

console.log(getDaysInMonth(2, 2020));
console.log(new Date().getMonth());
console.log(new Date().getFullYear());
console.log(addDayName(new Date().getDay()));
