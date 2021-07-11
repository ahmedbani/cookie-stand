'use strict';
let image =document.getElementById('head');
let imgElement = document.createElement('img');
image.appendChild(imgElement);
imgElement.setAttribute('src','./img/salmon.png')

let hours= ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
  name : 'seattle',
  min : 23,
  max : 65,
  avg : 6.3,
  getRandomNumber : function() {
    return random(this.min,this.max);

  },
  avgCookie : function(){
    return Math.round(this.getRandomNumber()*this.avg);
  }
};
let tokyo = {
  name : 'tokyo',
  min : 3,
  max : 24,
  avg : 1.2,
  getRandomNumber : function() {
    return random(this.min,this.max);

  },
  avgCookie : function(){
    return Math.round(this.getRandomNumber()*this.avg);
  }
};
let dubai = {
  name : 'dubai',
  min : 11,
  max : 38,
  avg : 3.7,
  getRandomNumber : function() {
    return random(this.min,this.max);

  },
  avgCookie : function(){
    return Math.round(this.getRandomNumber()*this.avg);
  }
};
let paris = {
  name : 'paris',
  min : 20,
  max : 38,
  avg : 2.3,
  getRandomNumber : function() {
    return random(this.min,this.max);

  },
  avgCookie : function(){
    return Math.round(this.getRandomNumber()*this.avg);
  }
};

let lima = {
  name : 'lima',
  min : 2,
  max : 16,
  avg : 4.6,
  getRandomNumber : function() {
    return random(this.min,this.max);

  },
  avgCookie : function(){
    return Math.round(this.getRandomNumber()*this.avg);
  }
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
seattle.render = function(){
  let parent = document.getElementById('sales');
  let h2Element = document.createElement('h2');
  parent.appendChild(h2Element);
  h2Element.textContent='Seattle';
  let ulElement =document.createElement('ul');
  parent.appendChild(ulElement);
  let total = 0;
    for(let i=0;i<hours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=hours[i]+': '+this.avgCookie()+' cookies';
      total += this.avgCookie();
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent='Total: '+ total+' cookies';
};
seattle.render();
tokyo.render = function(){
    let parent = document.getElementById('sales');
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent='Tokyo';
    let ulElement =document.createElement('ul');
    parent.appendChild(ulElement);
    let total = 0;
    for(let i=0;i<hours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=hours[i]+': '+this.avgCookie()+' cookies';
      total += this.avgCookie();
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent='Total: '+ total+' cookies';
  };
  tokyo.render();
  dubai.render = function(){
    let parent = document.getElementById('sales');
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent='Dubai';
    let ulElement =document.createElement('ul');
    parent.appendChild(ulElement);
    let total = 0;
    for(let i=0;i<hours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=hours[i]+': '+this.avgCookie()+' cookies';
      total += this.avgCookie();
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent='Total: '+ total+' cookies';
  };
  dubai.render();
  paris.render = function(){
    let parent = document.getElementById('sales');
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent='Paris';
    let ulElement =document.createElement('ul');
    parent.appendChild(ulElement);
    let total = 0;
    for(let i=0;i<hours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=hours[i]+': '+this.avgCookie()+' cookies';
      total += this.avgCookie();
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent='Total: '+ total+' cookies';
  };
  paris.render();
  lima.render = function(){
    let parent = document.getElementById('sales');
    let h2Element = document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent='Lima';
    let ulElement =document.createElement('ul');
    parent.appendChild(ulElement);
    let total = 0;
    for(let i=0;i<hours.length;i++){
      let liElement= document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=hours[i]+': '+this.avgCookie()+' cookies';
      total += this.avgCookie();
    }
    let liElement= document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent='Total: '+ total+' cookies';
  };
  lima.render();

