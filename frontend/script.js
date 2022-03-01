/* /* const currentDate = new Date("1999/01/02") // a Date szó a constructor, ami megépít valamit

console.log(currentDate); */

/* function Book(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function() {
        const d = new Date()
        const currentYear = d.getFullYear()
        return currentYear - this.year  // a book korát megírtuk 
    }
}

const myFavouriteBook = new Book("Háború és béke", "Tolsztoj", 1867, "Historical novel")
console.log(myFavouriteBook.title);

const mySecondFavouriteBook = new Book("Az algebra alapjai", "Joe Algebra", 1992, "sci-fi")
console.log(mySecondFavouriteBook.age());  // kell a zárójel, mert művelet */ 


// get Data 

function Month(name, id, nth, days) {
    this.name = name;
    this.id = id;
    this.nth = nth;
    this.days = days; 
}

const months = [
    new Month("january", "jan", 1, 31),
    new Month("february", "feb", 2, 28),
    new Month("march", "mar", 3, 31),
    new Month("april", "apr", 4, 30),
    new Month("may", "may", 5, 31),
    new Month("june", "jun", 6, 30),
    new Month("july", "jul", 7, 31),
    new Month("august", "aug", 8, 31),
    new Month("september", "sep", 9, 30),
    new Month("october", "oct", 10, 31),
    new Month("november", "nov", 11, 30),
    new Month("december", "dec", 12, 31),
]
// console.log(months);

// prepare Data  - (codewars) Business logic 



// components = HTML elements we would like to add to the document later 

const monthSection = (id, h1, days) => {  // a paraméterek scope-ja function
    return `
    <section id="${id}">
        <h1>${h1}</h1>
        <div class="days">${days}</div>
    </section>
    `;
}

const dayCard = (year, month, day) => {
    return `
    <div class="card">
        <time>${year}</time>
        <time>${month}</time>
        <time>${day}</time>
        <button class="card-btn">Get day name</button>
    </div>
    `;
}

const dayCards = (month, callDayCard) => {
    let toReturn = "";
    for (let i = 1; i <= month.days; i++) {
        toReturn += callDayCard(2022, month.nth, i)
    }

    return toReturn
}
// console.log(dayCards(months[0], dayCard));

// render = add the components to the document 

const loadEvent = _ => {   // _ nem fogjuk használni a paramétert   minden olyan alkalommal, amikor a documentet piszkáljuk
    let content = ""
    for (const month of months) {
        content += monthSection(month.id, month.name, dayCards(month, dayCard))
    }
    document.getElementById("root").insertAdjacentHTML("beforeend", content)

    // clickEvent vagy eventHandling

/*     function cardButtonClickEvent(event) {
        console.log(event.target.parentElement);
        event.target.parentElement.classList.toggle("clicked")

    }

    const cardList = document.querySelectorAll(".card")
    for (const card of cardList) {
        // console.log(card);
        card.querySelector("button").addEventListener("click", cardButtonClickEvent)

    }
 */
    function clickEvent(event) {
        // console.log(event.target);
        console.dir(this.target);
        if(event.target.classList.contains("card-btn")) {
            console.log("Hello click");
            event.target.innerHTML = "This button was clicked"
        }
    }
    document.addEventListener("click", clickEvent)
}


window.addEventListener("load", loadEvent) // callback függvény, nincs a végén zárójel --> argumentumként adjuk meg


