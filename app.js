'use strict';


var cities = []







function City(location, minCust, maxCust, avgCookieSale, picture) {

    // debugger

    this.location = location;

    this.minCust = minCust;

    this.maxCust = maxCust;

    this.avgCookieSale = avgCookieSale;

    this.hourlySales = [];

    this.picture = picture;

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

    newThEl.textContent = 'Totals:';

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







var seattle = new City('Seattle', 23, 65, 6.3, 'https://olsonkundig.com/wp-content/uploads/2017/11/13049_00_N504_web-2160x1549.jpg');




seattle.getRandom();

seattle.totalSales();

seattle.renderTableRow();









var tokyo = new City('Tokyo', 3, 24, 1.2, 'https://www.loveholidays.com/blog/wp-content/uploads/2015/08/Tokyo_addmustard_151391627.jpg');



tokyo.getRandom();

tokyo.totalSales();

tokyo.renderTableRow();









var lima = new City('Lima', 2, 16, 4.6, 'https://s-media-cache-ak0.pinimg.com/736x/42/fd/d8/42fdd8d7f523a2d1ed6cfb4913abf1b7.jpg');



lima.getRandom();

lima.totalSales();

lima.renderTableRow();









var dubai = new City('Dubai', 11, 38, 3.7, 'https://i.ytimg.com/vi/zGtz_GOA79w/maxresdefault.jpg');



dubai.getRandom();

dubai.totalSales();

dubai.renderTableRow();









var paris = new City('Paris', 20, 38, 2.3, 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg');



paris.getRandom();

paris.totalSales();

paris.renderTableRow();







console.log(cities)

totalsCities();

console.log(totalsCities)


// City.totalForAll();

// Step 1 find a target
var chatFrom = document.getElementById('chatform');
//var salmonformthing = document.getElementById('salmonform')

//step 3 attach a callback function
function salmonForms(eventPotatoTomato) {
    //collects the name and message and puts it in the chat list

    //any time we use JS to capture a submit from a form
    // we need to use Event.Prototype.preventDefault
    eventPotatoTomato.preventDefault();


    //when form is submitte it creates an event with ALL the information
    //BELOW this - is finding the relevent information instead of that massive return we saw in the chrome console.

    //entire event
    console.log('Event: ', eventPotatoTomato);

    //event's target (form)
    console.log('Target', eventPotatoTomato.target);

    //we look at the property of the target that is the name of the input we want
    console.log('Input : ', eventPotatoTomato.target.city);

    //we look at the event target input value
    // console.log('Value : ', eventPotatoTomato.target.city.info);

    console.log(eventPotatoTomato.target.city.min);
    console.log(eventPotatoTomato.target.city.min.max);
    console.log(eventPotatoTomato.target.city.min.max.averages);

    // console.log('Message : ' + eventPotatoTomato.target.city.value);


}

//Step 2 add an EventListener
chatFrom.addEventListener('submit', salmonForms);
// salmonformthing.addEventListener('submit', salmonForms);