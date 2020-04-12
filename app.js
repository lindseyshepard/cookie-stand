'use strict'



var cities = []

var formArray = []



function City(location, minCust, maxCust, avgCookieSale, ) {

    // debugger

    this.location = location;

    this.minCust = minCust;

    this.maxCust = maxCust;

    this.avgCookieSale = avgCookieSale;

    this.hourlySales = [];

    this.allTotalSales = 0;

    cities.push(this)

}



var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']



var multiplier = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6]

var copy = []

copy = multiplier;

console.log(copy)





City.prototype.getRandom = function() {

    var min = Math.ceil(this.minCust);

    var max = Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max - min)) + min;

}



City.prototype.totalSales = function() {

    for (var i = 6; i <= 19; i++) {

        var hourlyCust = this.getRandom();

        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);

        this.hourlySales.push(Math.round(hourlyCookieSales))

    }

    for (i = 0; i < this.hourlySales.length; i++) {

        this.allTotalSales = this.allTotalSales + this.hourlySales[i]

    }

}



City.prototype.renderTableRow = function() {



    var tableElToTarget = document.getElementById('sales-table');

    var newTrEl = document.createElement('tr');

    var newThEl = document.createElement('th');

    var newTdEl = document.createElement('td');

    newThEl.textContent = this.location;

    newTrEl.appendChild(newThEl);



    for (var i = 0; i < 14; i++) {

        newTdEl = document.createElement('td');

        newTdEl.textContent = this.hourlySales[i];

        newTrEl.appendChild(newTdEl);

    }



    var newTotalTd = document.createElement('td');

    newTotalTd.textContent = this.allTotalSales;

    newTrEl.appendChild(newTotalTd);

    tableElToTarget.appendChild(newTrEl);





};



function clock() {

    var tableElToTarget = document.getElementById('sales-table');

    var newTrEl = document.createElement('tr');

    var newThEl = document.createElement('th');

    newTrEl.appendChild(newThEl);

    for (var i = 0; i < 15; i++) {

        var newThEl = document.createElement('th');

        newThEl.textContent = time[i];

        newTrEl.appendChild(newThEl);

    }



    tableElToTarget.appendChild(newTrEl);



};



function totalsCities() {

    var tableElToTarget = document.getElementById('sales-table');

    var newTrEl = document.createElement('tr');

    var newThEl = document.createElement('th');

    newThEl.textContent = 'Totals: ';

    newTrEl.appendChild(newThEl);



    var cityHourly = [];

    for (var j = 0; j < 14; j++) {

        var amHours = 0;



        for (var i = 0; i < cities.length; i++) {

            amHours = amHours + cities[i].hourlySales[j] //6am is  referenced by the "location" 0 inside the brackets 

        }



        console.log('total ' + amHours)

        cityHourly.push(amHours) //this pushes amhours into the cityhourly array and then below is the for loop that populates it in the table

    }

    console.log(cityHourly)



    for (i = 0; i < 14; i++) {

        var newThEl = document.createElement('th');

        newThEl.textContent = cityHourly[i];

        newTrEl.appendChild(newThEl);

    }



    var totalEverything = 0;

    for (i = 0; i < cityHourly.length; i++) {

        totalEverything = totalEverything + cityHourly[i];

    }

    var newThEl = document.createElement('th');

    newThEl.textContent = totalEverything;

    newTrEl.appendChild(newThEl);

    tableElToTarget.append(newTrEl)



};

clock();





var seattle = new City('Seattle', 23, 65, 6.3, );



seattle.getRandom();

seattle.totalSales();

seattle.renderTableRow();







var tokyo = new City('Tokyo', 3, 24, 1.2, );



tokyo.getRandom();

tokyo.totalSales();

tokyo.renderTableRow();







var lima = new City('Lima', 2, 16, 4.6, );



lima.getRandom();

lima.totalSales();

lima.renderTableRow();







var dubai = new City('Dubai', 11, 38, 3.7, );



dubai.getRandom();

dubai.totalSales();

dubai.renderTableRow();







var paris = new City('Paris', 20, 38, 2.3, );



paris.getRandom();

paris.totalSales();

paris.renderTableRow();

// function removeFinalRow() {
//     totalsCities.remove();

// }



function makeFinalRow() {
    totalsCities();
}
makeFinalRow();


var storeForm = document.getElementById('chatform');

storeForm.addEventListener('submit', function(e) {

    e.preventDefault();

    var city = e.target.city.value;

    var min = e.target.min.value;

    var max = e.target.max.value;

    var averages = e.target.averages.value;

    var x = new City(city, min, max, averages);


    // removeFinalRow();




    totalsCities();

    x.getRandom();
    x.totalSales();
    x.renderTableRow();

    makeFinalRow();
    console.log(storeForm)



    formArray.push(storeForm);

})


// totalsCities.removeFinalRow();


// console.log(formArray);
//totalsCities();