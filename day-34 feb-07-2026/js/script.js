const time = document.getElementById("time");
const date = document.getElementById("date");
const week = document.getElementById("week");


/*
const d = new Date();

let hour = d.getHours();
let ampm;
let min = d.getMinutes();
let sec = d.getSeconds();

if (hour > 12) {
  hour = hour - 12;
  ampm = "PM";
}else if (hour === 12) {
  ampm = "PM";
} else if (hour === 0) {
  hour = 12;
  ampm = "AM";
}else {
  ampm = "AM";
} 


// time.textContent = hour + " " + ampm;
// time.textContent = `${hour}:${min}:${sec} ${ampm}`;

time.textContent = d.toLocaleTimeString("en-US", { hour12: true });

const month = d.getMonth();
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// date.textContent = months[month] + " " + d.getDate() + ", " + d.getFullYear();
date.textContent = `${months[month]} ${d.getDate()}, ${d.getFullYear()}`;


date.textContent = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const weekDay = days[d.getDay()];
*/

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
days.forEach(w => {
    const div = document.createElement("div");
    div.classList = "border rounded px-2 py-1 text-xs font-bold" 
    div.textContent = w;
    week.appendChild(div);
});

const showDateAndTime = () => {
    const d = new Date();
    time.textContent = d.toLocaleTimeString("en-US", { hour12: true });
    date.textContent = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    const weekDay = d.toLocaleString('en-US', { weekday: 'short' });
    Array.from(week.children).forEach(w => {
        if(w.textContent === weekDay) {
            w.classList.add("border-blue-500", "text-blue-500");
        } else {
            w.classList.remove("border-blue-500", "text-blue-500");
        }
    })
}
showDateAndTime();
setInterval(showDateAndTime, 1000);
