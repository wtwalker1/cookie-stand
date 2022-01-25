'use strict';
console.log('Pats Salmon Cookies Online');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let storeList = document.getElementById('storeList');
console.log(storeList);

let firstStore = {
  storeName : 'Seattle',
  custMaxHour : 65,
  custMinHour : 23,
  avgCookiePerSale : 6.3,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalDailyCookies : 0,
  numCustomerPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      console.log(this.hourlyCustomer[i]);
      console.log(this.avgCookiePerSale);
      let oneHour = this.hourlyCookies.push(Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale));
      this.totalDailyCookies += oneHour;
    }
  },
  render(){
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + this.hourlyCookies[i] + 'cookies';
      // console.log(listItem);
      storeList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
    storeList.appendChild(listTotal);
  }
};

firstStore.numCustomerPerHour();
firstStore.cookieForEachHour();
firstStore.render();

let secondStore = {
  storeName : 'Tokyo',
  custMaxHour : 24,
  custMinHour : 3,
  avgCookiePerSale : 1.2,
  hourlyCustomer: [],
  hourlyCookies: [],
  totalDailyCookies : 0,
  numCustomerPerHour: function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(this.hourlyCustomer);
      console.log(this.avgCookiePerSale);
      let oneHour = this.hourlyCookies.push(Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale));
      this.totalDailyCookies += oneHour;
    }
  },
  render(){
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + this.hourlyCookies[i] + 'cookies';
      // console.log(listItem);
      storeList.appendChild(listItem);

    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
    storeList.appendChild(listTotal);
  }//close render
};//close second object

secondStore.numCustomerPerHour();
secondStore.cookieForEachHour();
secondStore.render();

let thirdStore = {
  storeName : 'Dubai',
  custMaxHour : 38,
  custMinHour : 11,
  avgCookiePerSale : 3.7,
  hourlyCustomer : [],
  hourlyCookies : [],
  totalDailyCookies : 0,
  numCustomerPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(this.hourlyCustomer);
      console.log(this.avgCookiePerSale);
      let oneHour = this.hourlyCookies.push(Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale));
      this.totalDailyCookies += oneHour;
    }
  },
  render(){
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + this.hourlyCookies[i] + 'cookies';
      // console.log(listItem);
      storeList.appendChild(listItem);

    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
    storeList.appendChild(listTotal);
  }
};

thirdStore.numCustomerPerHour();
thirdStore.cookieForEachHour();
thirdStore.render();

let fourthStore = {
  storeName : 'Paris',
  custMaxHour : 38,
  custMinHour : 20,
  avgCookiePerSale : 2.3,
  hourlyCustomer : [],
  hourlyCookies : [],
  totalDailyCookies : 0,
  numCustomerPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(this.hourlyCustomer);
      console.log(this.avgCookiePerSale);
      let oneHour = this.hourlyCookies.push(Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale));
      this.totalDailyCookies += oneHour;
    }
  },
  render(){
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + this.hourlyCookies[i] + 'cookies';
      // console.log(listItem);
      storeList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
    storeList.appendChild(listTotal);
  }
};

fourthStore.numCustomerPerHour();
fourthStore.cookieForEachHour();
fourthStore.render();

let fifthStore = {
  storeName : 'Lima',
  custMaxHour : 16,
  custMinHour : 2,
  avgCookiePerSale : 4.6,
  hourlyCustomer : [],
  hourlyCookies : [],
  totalDailyCookies : 0,
  numCustomerPerHour : function(){
    for(let i = 0; i < hours.length; i++){
      this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
    }
  },
  cookieForEachHour: function(){
    for(let i = 0; i < hours.length; i++){
      // console.log(this.hourlyCustomer);
      console.log(this.avgCookiePerSale);
      let oneHour = this.hourlyCookies.push(Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale));
      this.totalDailyCookies += oneHour;
    }
  },
  render(){
    for(let i = 0; i < hours.length; i++){
      let listItem = document.createElement('li');
      listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
      // console.log(listItem);
      storeList.appendChild(listItem);
    }
    let listTotal = document.createElement('li');
    listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
    storeList.appendChild(listTotal);
  }
};

fifthStore.numCustomerPerHour();
fifthStore.cookieForEachHour();
fifthStore.render();

function random(custMinHour, custMaxHour){
  return Math.floor(Math.random() * (custMaxHour - custMinHour) + custMinHour);
}

let storeArray = [firstStore, secondStore, thirdStore, fourthStore, fifthStore];
// console.log(storeArray);


//render store list//
// create <li> item and update textContent to the next line
// add hour and total cookies per that hour and then the text cookies
// then
// add last <li> with 'total' and number and cookies.
//6am: 16 cookies

// for(let i=0; i < storeArray.length; i++){
//   let storeList = document.createElement('li');
//   console.log(storeArray[i].hourlyCookies + 'hello');
// }

