var dt = new Date();
dt.setDate(1);

var  endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate();

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

var cells = "";
for (let i = 1; i <= endDate; i++) { 
    cells += "<p>" + i + "</p>"
}

document.getElementsByClassName("days")[0].innerHTML = cells;