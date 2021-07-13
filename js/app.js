'use strict';
let hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let branches=[];
function Branch(location, minCustomers, maxCustomers, avgcookies){
  this.location= location;
  this.minCustomers= minCustomers;
  this.maxCustomers= maxCustomers;
  this.avgcookies= avgcookies;
  this.customersHourly= [];
  this.cookiesHourly=[];

 
  branches.push(this);
}
Branch.prototype.calc=function(){
  for(let i =0; i<hours.length;i++){
    this.customersHourly.push(random(this.minCustomers,this.maxCustomers));
    this.cookiesHourly.push(Math.floor(this.customersHourly[i]*this.avgcookies))
  }
};
let seattle = new Branch('Seattle',23,65,6.3);
let tokyo = new Branch('Tokyo',3,24,1.2);
let dubai = new Branch('Dubai',11,38,3.7);
let paris = new Branch('Paris',20,38,2.3);
let lima = new Branch('Lima',2,16,4.6);

function random(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) ) + minCustomers;
}
let parent = document.getElementById('sales');
let tableElement = document.createElement('table');
parent.appendChild(tableElement);
function header(){
  let headingRow = document.createElement('tr');
  tableElement.appendChild(headingRow);
  let nameTh = document.createElement('th');
  headingRow.appendChild(nameTh);
  nameTh.textContent='Name';
  for(let i=0;i<hours.length;i++){
    let heading = document.createElement('th');
    headingRow.appendChild(heading);
    heading.textContent=hours[i]+' ';
  }
  let lastHeading = document.createElement('th');
  headingRow.appendChild(lastHeading);
  lastHeading.textContent='Daily Location Total';
}
header();
let cookiesPerDayArr=[];
Branch.prototype.render=function() {
  let rowElement = document.createElement('tr');
  tableElement.appendChild(rowElement);
  let columnElement = document.createElement('td');
  rowElement.appendChild(columnElement);
  columnElement.textContent=this.location;
  let rowTotal =0;
  for(let i=0;i<hours.length+1;i++){
    if(i<14){
      let cookiesData = document.createElement('td');
      rowElement.appendChild(cookiesData);
      cookiesData.textContent=this.cookiesHourly[i];
      rowTotal+= this.cookiesHourly[i];
    }else if(i>=14){
      let cookiesPerDay = document.createElement('td');
      rowElement.appendChild(cookiesPerDay);
      cookiesPerDay.textContent=rowTotal;
      cookiesPerDayArr.push(rowTotal);
    }
  }
};

function footer(){
  let rowElement = document.createElement('tr');
  tableElement.appendChild(rowElement);
  let colElement = document.createElement('td');
  rowElement.appendChild(colElement);

  colElement.textContent='Totals';

  for(let i=0;i<hours.length;i++){
    let columnTotal=0;
    let columnElement = document.createElement('td');
    rowElement.appendChild(columnElement);
    for(let j=0;j<branches.length;j++){
      columnElement.textContent=columnTotal;
      columnTotal+=branches[j].cookiesHourly[i];
    }
  }

  let totalCookies =0;
  for(let i=0 ; i<cookiesPerDayArr.length;i++){
    totalCookies+=cookiesPerDayArr[i];
  }
  let columnElement = document.createElement('td');
  rowElement.appendChild(columnElement);
  columnElement.textContent=totalCookies;
  console.log(totalCookies);
}
for(let i =0;i<branches.length;i++){
  branches[i].calc();
  branches[i].render();
}
footer();





