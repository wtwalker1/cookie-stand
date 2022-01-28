'use strict';
console.log('Pats Salmon Cookies Online');

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let cookieTable = document.getElementById('storeList');
let storeList = document.getElementById('storeList');
console.log(storeList);

function CookieStore(storeName, custMaxHour, custMinHour, avgCookiesPerSale, hourlyCustomers, hourlyCookies){
  this.storeName = storeName;
  this.custMaxHour = custMaxHour;
  this.custMinHour = custMinHour;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.hourlyCustomers = hourlyCustomers;
  this.hourlyCookies = hourlyCookies;
  this.numCustomersPerHour();
  this.cookiesForEachHour();
  CookieStore.storeArray.push(this);
}

CookieStore.storeArray = [];
console.log(CookieStore.storeArray);

CookieStore.prototype.numCustomersPerHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyCustomers.push(random(this.custMinHour, this.custMaxHour));
  }

};
CookieStore.prototype.cookiesForEachHour = function(){
  for(let i = 0; i < hours.length; i++){
    this.hourlyCookies.push(Math.round(this.hourlyCustomers[i] * this.avgCookiePerSale));
  }
};

function random(min, max){
  return Math.round(Math.random() * (max - min) + min);
}
new CookieStore('Seattle', 65, 23, 6.3, [], []);
new CookieStore('Tokyo', 24, 3, 1.2, [], []);
new CookieStore('Dubai', 38, 11, 3.7, [], []);
new CookieStore('Paris', 20, 11, 2.3, [], []);
new CookieStore('Lima', 16, 2, 4.6, [], []);

CookieStore.prototype.tableHeader = function(){
  let cookieTable = document.getElementById('storeList');
  let headerRow = document.createElement('tr');
  let locationCell = document.createElement('th');
  locationCell.textContent = 'Location';
  headerRow.appendChild(locationCell);
  for(let i = 0; i < hours.length; i++){
    let hoursOpen = document.createElement('td');
    hoursOpen.textContent = hours[i];
    headerRow.appendChild(hoursOpen);
  }
  let totalCell = document.createElement('td');
  totalCell.textContent = 'total';
  headerRow.appendChild(totalCell);
  cookieTable.appendChild(headerRow);
};

CookieStore.prototype.render = function() {
  let locRow = document.createElement('tr');
  let locationCell = document.createElement('td');
  locationCell.textContent = this.storeName;
  locRow.appendChild(locationCell);
  let totalCookieSum = 0;
  for(let j = 0; j < hours.length; j++){
    let hourlyData = document.createElement('td');
    hourlyData.textContent = this.hourlyCookies[j];
    totalCookieSum += this.hourlyCookies[j];
    locRow.appendChild(hourlyData);
  }

  let allStoreDayTotals = document.createElement('td');
  allStoreDayTotals.textContent = totalCookieSum;
  locRow.appendChild(allStoreDayTotals);
  cookieTable.appendChild(locRow);
};

CookieStore.prototype.footer = function(){

  let footerRow = document.createElement ('tr');
  let nameCell = document.createElement ('td');
  nameCell.textContent = 'Totals';
  footerRow.appendChild(nameCell);
  let totalTally = 0;
  for(let i = 0; i < hours.length; i++){
    let hourlyTally = 0;
    for(let j = 0; j < CookieStore.storeArray.length; j++){
      hourlyTally += CookieStore.storeArray[j].hourlyCookies[i];
      totalTally += CookieStore.storeArray[j].hourlyCookeis[i];
    }
    let totalCell = document.createElement('td');
    totalCell.textContent = hourlyTally;
    footerRow.appendChild(totalCell);
  }

  let totalFinalCell = document.createElement('td');
  totalFinalCell.textContent = totalTally;
  footerRow.appendChild(totalFinalCell);
  cookieTable.appendChild(footerRow);
};





// let firstStore = {
//   storeName : 'Seattle',
//   custMaxHour : 65,
//   custMinHour : 23,
//   avgCookiePerSale : 6.3,
//   hourlyCustomer: [],
//   hourlyCookies: [],
//   totalDailyCookies : 0,
//   numCustomerPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
//     }
//   },
//   cookieForEachHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       console.log(this.hourlyCustomer[i]);
//       console.log(this.avgCookiePerSale);
//       let oneHour = Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale);
//       this.hourlyCookies.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render(){
//     for(let i = 0; i < hours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
//       // console.log(listItem);
//       storeList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
//     storeList.appendChild(listTotal);
//   }
// };

// firstStore.numCustomerPerHour();
// firstStore.cookieForEachHour();
// firstStore.render();

// let secondStore = {
//   storeName : 'Tokyo',
//   custMaxHour : 24,
//   custMinHour : 3,
//   avgCookiePerSale : 1.2,
//   hourlyCustomer: [],
//   hourlyCookies: [],
//   totalDailyCookies : 0,
//   numCustomerPerHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
//     }
//   },
//   cookieForEachHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(this.hourlyCustomer);
//       console.log(this.avgCookiePerSale);
//       let oneHour = Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale);
//       this.hourlyCookies.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render(){
//     for(let i = 0; i < hours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
//       // console.log(listItem);
//       storeList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
//     storeList.appendChild(listTotal);
//   }//close render
// };//close second object

// secondStore.numCustomerPerHour();
// secondStore.cookieForEachHour();
// secondStore.render();

// let thirdStore = {
//   storeName : 'Dubai',
//   custMaxHour : 38,
//   custMinHour : 11,
//   avgCookiePerSale : 3.7,
//   hourlyCustomer : [],
//   hourlyCookies : [],
//   totalDailyCookies : 0,
//   numCustomerPerHour : function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
//     }
//   },
//   cookieForEachHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(this.hourlyCustomer);
//       console.log(this.avgCookiePerSale);
//       let oneHour = Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale);
//       this.hourlyCookies.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render(){
//     for(let i = 0; i < hours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
//       // console.log(listItem);
//       storeList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
//     storeList.appendChild(listTotal);
//   }
// };

// thirdStore.numCustomerPerHour();
// thirdStore.cookieForEachHour();
// thirdStore.render();

// let fourthStore = {
//   storeName : 'Paris',
//   custMaxHour : 38,
//   custMinHour : 20,
//   avgCookiePerSale : 2.3,
//   hourlyCustomer : [],
//   hourlyCookies : [],
//   totalDailyCookies : 0,
//   numCustomerPerHour : function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
//     }
//   },
//   cookieForEachHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(this.hourlyCustomer);
//       console.log(this.avgCookiePerSale);
//       let oneHour = Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale);
//       this.hourlyCookies.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render(){
//     for(let i = 0; i < hours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
//       // console.log(listItem);
//       storeList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
//     storeList.appendChild(listTotal);
//   }
// };

// fourthStore.numCustomerPerHour();
// fourthStore.cookieForEachHour();
// fourthStore.render();

// let fifthStore = {
//   storeName : 'Lima',
//   custMaxHour : 16,
//   custMinHour : 2,
//   avgCookiePerSale : 4.6,
//   hourlyCustomer : [],
//   hourlyCookies : [],
//   totalDailyCookies : 0,
//   numCustomerPerHour : function(){
//     for(let i = 0; i < hours.length; i++){
//       this.hourlyCustomer.push(random(this.custMinHour, this.custMaxHour));
//     }
//   },
//   cookieForEachHour: function(){
//     for(let i = 0; i < hours.length; i++){
//       // console.log(this.hourlyCustomer);
//       console.log(this.avgCookiePerSale);
//       let oneHour = Math.floor(this.hourlyCustomer[i] * this.avgCookiePerSale);
//       this.hourlyCookies.push(oneHour);
//       this.totalDailyCookies += oneHour;
//     }
//   },
//   render(){
//     for(let i = 0; i < hours.length; i++){
//       let listItem = document.createElement('li');
//       listItem.textContent = hours[i] + ' ' +this.hourlyCookies[i] + ' cookies';
//       // console.log(listItem);
//       storeList.appendChild(listItem);
//     }
//     let listTotal = document.createElement('li');
//     listTotal.textContent = 'totals: ' + this.totalDailyCookies + ' cookies.';
//     storeList.appendChild(listTotal);
//   }
// };

// fifthStore.numCustomerPerHour();
// fifthStore.cookieForEachHour();
// fifthStore.render();

// function random(custMinHour, custMaxHour){
//   return Math.floor(Math.random() * (custMaxHour - custMinHour) + custMinHour);
// }

// let storeArray = [firstStore, secondStore, thirdStore, fourthStore, fifthStore];
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
