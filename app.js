'use strict';

var seattle = {
    location: 'Seattle',
    openHour: 6,
    closeHour: 19,
    minCust: 23,
    maxCust: 65,
    avgSale: 6.3,
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    cookieSales: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57]

};
console.log('This is : ' + seattle.location)
seattle.render = function() {
    var targetUlEl = document.getElementById('cookies');
    var newLiEl = document.createElement('li');
    var cookieText = 'flavor : ' + this.location + ' cost : $ ' + this.avgSale;
    newLiEl.textContent = cookieText;

    var newImageEl = document.createElement('img');
    newImageEl.src = this.picture;
    newLiEl.appendChild(newImageEl);
    console.log(newLiEl);

    targetUlEl.appendChild(newLiEl);
};

seattle.render();



var tokyo = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgSale: 1.2,

};

tokyo.render = function() {
    var targetUlEl = document.getElementById('cookies');
    var newLiEl = document.createElement('li');
    var cookieText = 'flavor : ' + this.location + ' cost : $ ' + this.avgSale;
    newLiEl.textContent = cookieText;

    var newImageEl = document.createElement('img');
    newImageEl.src = this.picture;
    newLiEl.appendChild(newImageEl);
    console.log(newLiEl);

    targetUlEl.appendChild(newLiEl);
    console.log(cookieText);
};

// console.log(seattle.render.cookieText());
tokyo.render();



var dubai = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgSale: 3.7,
}

dubai.render = function() {
    var targetUlEl = document.getElementById('cookies');
    var newLiEl = document.createElement('li');
    var cookieText = 'flavor : ' + this.location + ' cost : $ ' + this.avgSale;
    newLiEl.textContent = cookieText;

    var newImageEl = document.createElement('img');
    newImageEl.src = this.picture;
    newLiEl.appendChild(newImageEl);
    console.log(newLiEl);

    targetUlEl.appendChild(newLiEl);
    console.log(cookieText);
};
dubai.render();



var paris = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgSale: 2.3,
}

paris.render = function() {
    var targetUlEl = document.getElementById('cookies');
    var newLiEl = document.createElement('li');
    var cookieText = 'flavor : ' + this.location + ' cost : $ ' + this.avgSale;
    newLiEl.textContent = cookieText;

    var newImageEl = document.createElement('img');
    newImageEl.src = this.picture;
    newLiEl.appendChild(newImageEl);
    console.log(newLiEl);

    targetUlEl.appendChild(newLiEl);
    console.log(cookieText);
};
paris.render();



var lima = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgSale: 4.6,
}

lima.render = function() {
    var targetUlEl = document.getElementById('cookies');
    var newLiEl = document.createElement('li');
    var cookieText = 'flavor : ' + this.location + ' cost : $ ' + this.avgSale;
    newLiEl.textContent = cookieText;

    var newImageEl = document.createElement('img');
    newImageEl.src = this.picture;
    newLiEl.appendChild(newImageEl);
    console.log(newLiEl);

    targetUlEl.appendChild(newLiEl);
    console.log(cookieText);
};
lima.render();














function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
};

console.log(getRandom(23, 65));


var h1Target = document.getElementById('pageTitle');

var newText = 'Welcome to DOM Manipulation!';

h1Target.textContent = newText;

for (var i = 6; i <= 19; i++) {
    var orderedListEl = document.getElementById('randomNums');
    console.log(orderedListEl);


    var newListItemEl = document.createElement('li');
    newListItemEl.textContent = i;

    orderedListEl.appendChild(newListItemEl);
};




///Random Numbers by city

var seattleRandom = (seattle.minCust, seattle.maxCust);
console.log(seattleRandom);

var tokyoRandom = (tokyo.minCust, tokyo.maxCust);
console.log(tokyoRandom);

var dubaiRandom = (dubai.minCust, dubai.max);
console.log(dubaiRandom);

var parisRandom = (paris.minCust, paris.max);
console.log(parisRandom);

var limaRandom = (lima.minCust, lima.maxCust);
console.log(limaRandom);