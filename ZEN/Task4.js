//1 How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

let compareJSON = Object.entries(obj1).toString === Object.entries(obj2).toString
console.log(compareJSON)


//2 Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.status == 200) {
    let response = JSON.parse(this.responseText)
    response.forEach((element) => {
      console.log(element.flag)
    }); 
  };
};

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();


//3 Use the same rest countries and print all countries name, region, sub region and population
let request = new XMLHttpRequest();

request.onreadystatechange = function() {
  if(request.status == 200) {
    let response = JSON.parse(this.responseText)
    response.forEach((element) => {
      console.log(element.name.common)
      console.log(element.region);
      console.log(element.subregion)
      console.log(element.population)
    }); 
  };
};

request.open("GET", "https://restcountries.com/v3.1/all");
request.send();