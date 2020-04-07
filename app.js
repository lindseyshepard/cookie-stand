'use strict';


var seattle = {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookieSale: 6.3,
    allTotalSales: 0,
    hourlySales: [],
    picture: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Space_Needle_2011-07-04.jpg'
};


seattle.getRandom = function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

seattle.totalSales = function() {
    for (var i = 6; i <= 19; i++) {
        var hourlyCust = this.getRandom();
        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
        this.hourlySales.push(Math.round(hourlyCookieSales))
    }
    for (i = 0; i < this.hourlySales.length; i++) {
        this.allTotalSales = this.allTotalSales + this.hourlySales[i]
    }
}

seattle.render = function() {
    var targetUlEl = document.getElementById('storeSeattle');
    var newLiEl = document.createElement('li');
    var storeCookies = 'Store ' + seattle.location + ' has ' + seattle.minCust + ' to ' + seattle.maxCust + ' customers\'s an hour with an average sales of ' + seattle.avgCookieSale + '.';
    newLiEl.textContent = storeCookies;

    var seattleImgEl = document.createElement('img');
    seattleImgEl.src = this.picture;
    newLiEl.appendChild(seattleImgEl);
    targetUlEl.appendChild(newLiEl);


    var orderedListEl = document.getElementById('seattleRandomNums');
    console.log(this.hourlySales)

    for (var i = 6; i <= 19; i++) {

        var newListItemEl = document.createElement('li');

        if (i <= 11) {
            newListItemEl.textContent = [i + ' am: ' + this.hourlySales[i - 6] + ' cookies '];

        } else if (i > 12) {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [(i - 12) + ' pm: ' + this.hourlySales[i - 6] + ' cookies '];

        } else {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [i + ' pm ' + this.hourlySales[i - 6] + ' cookies '];
        }
        orderedListEl.appendChild(newListItemEl);
    }
    var totalSalesString = document.createElement('li');
    totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies ');
    orderedListEl.appendChild(totalSalesString);

}
seattle.totalSales();

seattle.render();










//tokyo
var tokyo = {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookieSale: 1.2,
    allTotalSales: 0,
    hourlySales: [],
    picture: 'https://www.loveholidays.com/blog/wp-content/uploads/2015/08/Tokyo_addmustard_151391627.jpg'
};


tokyo.getRandom = function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

tokyo.totalSales = function() {
    for (var i = 6; i <= 19; i++) {
        var hourlyCust = this.getRandom();
        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
        this.hourlySales.push(Math.round(hourlyCookieSales))
    }
    for (i = 0; i < this.hourlySales.length; i++) {
        this.allTotalSales = this.allTotalSales + this.hourlySales[i]
    }
}

tokyo.render = function() {
    var targetUlEl = document.getElementById('storeTokyo');
    var newLiEl = document.createElement('li');
    var storeCookies = 'Store ' + this.location + ' has ' + this.minCust + ' to ' + this.maxCust + ' customers\'s an hour with an average sales of ' + this.avgCookieSale + '.';
    newLiEl.textContent = storeCookies;

    var tokyoImgEl = document.createElement('img');
    tokyoImgEl.src = this.picture;
    newLiEl.appendChild(tokyoImgEl);
    targetUlEl.appendChild(newLiEl);


    var orderedListEl = document.getElementById('tokyoRandomNums');
    console.log(this.hourlySales)

    for (var i = 6; i <= 19; i++) {

        var newListItemEl = document.createElement('li');

        if (i <= 11) {
            newListItemEl.textContent = [i + ' am: ' + this.hourlySales[i - 6] + ' cookies'];

        } else if (i > 12) {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [(i - 12) + ' pm: ' + this.hourlySales[i - 6] + ' cookies'];

        } else {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [i + ' pm ' + this.hourlySales[i - 6] + ' cookies'];
        }
        orderedListEl.appendChild(newListItemEl);
    }
    var totalSalesString = document.createElement('li');
    totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
    orderedListEl.appendChild(totalSalesString);

}
tokyo.totalSales();

tokyo.render();










//lima
var lima = {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookieSale: 4.6,
    allTotalSales: 0,
    hourlySales: [],
    picture: 'https://s-media-cache-ak0.pinimg.com/736x/42/fd/d8/42fdd8d7f523a2d1ed6cfb4913abf1b7.jpg'
};


lima.getRandom = function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

lima.totalSales = function() {
    for (var i = 6; i <= 19; i++) {
        var hourlyCust = this.getRandom();
        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
        this.hourlySales.push(Math.round(hourlyCookieSales))
    }
    for (i = 0; i < this.hourlySales.length; i++) {
        this.allTotalSales = this.allTotalSales + this.hourlySales[i]
    }
}

lima.render = function() {
    var targetUlEl = document.getElementById('storeLima');
    var newLiEl = document.createElement('li');
    var storeCookies = 'Store ' + this.location + ' has ' + this.minCust + ' to ' + this.maxCust + ' customers\'s an hour with an average sales of ' + this.avgCookieSale + '.';
    newLiEl.textContent = storeCookies;

    var limaImgEl = document.createElement('img');
    limaImgEl.src = this.picture;
    newLiEl.appendChild(limaImgEl);
    targetUlEl.appendChild(newLiEl);


    var orderedListEl = document.getElementById('limaRandomNums');
    console.log(this.hourlySales)

    for (var i = 6; i <= 19; i++) {

        var newListItemEl = document.createElement('li');

        if (i <= 11) {
            newListItemEl.textContent = [i + ' am: ' + this.hourlySales[i - 6] + ' cookies'];

        } else if (i > 12) {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [(i - 12) + ' pm: ' + this.hourlySales[i - 6] + ' cookies'];

        } else {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [i + ' pm ' + this.hourlySales[i - 6] + ' cookies'];
        }
        orderedListEl.appendChild(newListItemEl);
    }
    var totalSalesString = document.createElement('li');
    totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
    orderedListEl.appendChild(totalSalesString);

}
lima.totalSales();

lima.render();










//dubai
var dubai = {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookieSale: 3.7,
    allTotalSales: 0,
    hourlySales: [],
    picture: 'https://i.ytimg.com/vi/zGtz_GOA79w/maxresdefault.jpg'
};


dubai.getRandom = function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

dubai.totalSales = function() {
    for (var i = 6; i <= 19; i++) {
        var hourlyCust = this.getRandom();
        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
        this.hourlySales.push(Math.round(hourlyCookieSales))
    }
    for (i = 0; i < this.hourlySales.length; i++) {
        this.allTotalSales = this.allTotalSales + this.hourlySales[i]
    }
}

dubai.render = function() {
    var targetUlEl = document.getElementById('storeDubai');
    var newLiEl = document.createElement('li');
    var storeCookies = 'Store ' + this.location + ' has ' + this.minCust + ' to ' + this.maxCust + ' customers\'s an hour with an average sales of ' + this.avgCookieSale + '.';
    newLiEl.textContent = storeCookies;

    var dubaiImgEl = document.createElement('img');
    dubaiImgEl.src = this.picture;
    newLiEl.appendChild(dubaiImgEl);
    targetUlEl.appendChild(newLiEl);


    var orderedListEl = document.getElementById('dubaiRandomNums');
    console.log(this.hourlySales)

    for (var i = 6; i <= 19; i++) {

        var newListItemEl = document.createElement('li');

        if (i <= 11) {
            newListItemEl.textContent = [i + ' am: ' + this.hourlySales[i - 6] + ' cookies'];

        } else if (i > 12) {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [(i - 12) + ' pm: ' + this.hourlySales[i - 6] + ' cookies'];

        } else {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [i + ' pm ' + this.hourlySales[i - 6] + ' cookies'];
        }
        orderedListEl.appendChild(newListItemEl);
    }
    var totalSalesString = document.createElement('li');
    totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
    orderedListEl.appendChild(totalSalesString);

}
dubai.totalSales();

dubai.render();










//paris
var paris = {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookieSale: 2.3,
    allTotalSales: 0,
    hourlySales: [],
    picture: 'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg'
};


paris.getRandom = function() {
    var min = Math.ceil(this.minCust);
    var max = Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max - min)) + min;
}

paris.totalSales = function() {
    for (var i = 6; i <= 19; i++) {
        var hourlyCust = this.getRandom();
        var hourlyCookieSales = (hourlyCust * this.avgCookieSale);
        this.hourlySales.push(Math.round(hourlyCookieSales))
    }
    for (i = 0; i < this.hourlySales.length; i++) {
        this.allTotalSales = this.allTotalSales + this.hourlySales[i]
    }
}

paris.render = function() {
    var targetUlEl = document.getElementById('storeParis');
    var newLiEl = document.createElement('li');
    var storeCookies = 'Store ' + this.location + ' has ' + this.minCust + ' to ' + this.maxCust + ' customers\'s an hour with an average sales of ' + this.avgCookieSale + '.';
    newLiEl.textContent = storeCookies;

    var parisImgEl = document.createElement('img');
    parisImgEl.src = this.picture;
    newLiEl.appendChild(parisImgEl);
    targetUlEl.appendChild(newLiEl);


    var orderedListEl = document.getElementById('parisRandomNums');
    console.log(this.hourlySales)

    for (var i = 6; i <= 19; i++) {

        var newListItemEl = document.createElement('li');

        if (i <= 11) {
            newListItemEl.textContent = [i + ' am: ' + this.hourlySales[i - 6] + ' cookies'];

        } else if (i > 12) {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [(i - 12) + ' pm: ' + this.hourlySales[i - 6] + ' cookies'];

        } else {
            var newListItemEl = document.createElement('li');
            newListItemEl.textContent = [i + ' pm ' + this.hourlySales[i - 6] + ' cookies'];
        }
        orderedListEl.appendChild(newListItemEl);
    }
    var totalSalesString = document.createElement('li');
    totalSalesString.textContent = ('Total Sales : ' + this.allTotalSales + ' cookies');
    orderedListEl.appendChild(totalSalesString);

}
paris.totalSales();

paris.render();