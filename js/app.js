'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let firstStore = {
  storeName : 'Seattle',
  custMaxHour : 65,
  custMinHour : 23,
  avgCookiePerSale : 6.3,
  hourlyCustomers: [],
  hourlyCookies: [],
  numCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(this.hourlyCookies * this.avgCookiePerSale);
    }
  }
};

let secondStore = {
  storeName : 'Tokyo',
  custMaxHour : 24,
  custMinHour : 3,
  avgCookiePerSale : 1.2,
  hourlyCustomer: [],
  hourlyCookies: [],
  numCustomersPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(this.hourlyCookies * this.avgCookiesPerSale);
    }
  }
};

let thirdStore = {
  storeName : 'Dubai',
  custMaxHour : 38,
  custMinHour : 11,
  avgCookiePerSale : 3.7,
  hourlyCustomer : [],
  hourlyCookies : [],
  numCustomersPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  }
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(this.hourlyCookies * this.avgCookiesPerSale);
    }
  }
};

let fourthStore = {
  storeName : 'Paris',
  custMaxHour : 38,
  custMinHour : 20,
  avgCookiePerSale : 2.3,
  hourlyCustomer : [],
  hourlyCookies : [],
  numCustomersPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  }
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(this.hourlyCookies * this.avgCookiesPerSale);
    }
  }
};

let fifthStore = {
  storeName : 'Lima',
  custMaxHour : 16,
  custMinHour : 2,
  avgCookiePerSale : 4.6,
  hourlyCustomer : [],
  hourlyCookies : [],
  numCustomersPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
    }
  }
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCookies.push(this.hourlyCookies * this.avgCookiesPerSale);
    }
  }
}

function random(custMinHour, custMaxHour){
  return Math.floor(Math.random() * (custMaxHour - custMinHour) + custMinHour);
}