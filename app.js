'use strict';

function City(location, minCust, maxCust, avgCookieSale, allTotalSales, picture) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSale = avgCookieSale;
    this.hourlySales = [];
    this.picture = picture;
    this.allTotalSales = 0;
}

var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total']

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
    var newTdEl = document.createElement('td');
    newTdEl.textContent = this.location;
    newTrEl.appendChild(newTdEl);

    for (var i = 0; i < 14; i++) {
        newTdEl = document.createElement('td');
        newTdEl.textContent = this.hourlySales[i];
        newTrEl.appendChild(newTdEl);
    }

    var newTotalTd = document.createElement('td')
    newTotalTd.textContent = this.allTotalSales;
    newTrEl.appendChild(newTotalTd);

    tableElToTarget.appendChild(newTrEl);

};

function totalForAll() {
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
}

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

City.totalForAll();