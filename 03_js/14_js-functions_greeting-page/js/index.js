console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const currentTime = new Date().getHours();

  if (currentTime >= 6 && currentTime <= 12) {
    return "Good Morning";
  } else if (currentTime >= 13 && currentTime <= 18) {
    return "Good Afternoon";
  } else if (currentTime >= 19 && currentTime <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  // Code here
  const dayOfWeek = new Date().getDay();
  
  switch(dayOfWeek) {
    case 1: // Monday
      return "darkgray";
    case 2: // Tuesday
    case 3: // Wednesday
    case 4: // Thursday
    case 5: // Friday
      return "lightblue";
    default: // Saturday and Sunday
      return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
