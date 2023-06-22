const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();

// storing full name of all months in array
const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

///////////////////////////////////

const daysTag1 = document.querySelector(".days1"),
currentDate1 = document.querySelector(".current-date1"),
prevNextIcon1 = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date1 = new Date(),
currYear1 = date1.getFullYear(),
currMonth1 = date1.getMonth();

// storing full name of all months in array
const months1 = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar1 = () => {
    let firstDayofMonth = new Date(currYear1, currMonth1, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear1, currMonth1 + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear1, currMonth1, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear1, currMonth1, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date1.getDate() && currMonth1 === new Date().getMonth() 
                     && currYear1 === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate1.innerText = `${months1[currMonth1]} ${currYear1}`; // passing current mon and yr as currentDate text
    daysTag1.innerHTML = liTag;
}
renderCalendar1();

prevNextIcon1.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth1 = icon.id === "prev" ? currMonth1 - 1 : currMonth1 + 1;

        if(currMonth1 < 0 || currMonth1 > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date1 = new Date(currYear1, currMonth1, new Date().getDate());
            currYear1 = date1.getFullYear(); // updating current year with new date year
            currMonth1 = date1.getMonth(); // updating current month with new date month
        } else {
            date1 = new Date(); // pass the current date as date value
        }
        renderCalendar1(); // calling renderCalendar function
    });
});