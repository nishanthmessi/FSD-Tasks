//Get all the countries from Asia continent /region using Filter function
let request= new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', 'true');
request.send();
request.onload = function () {
    let countryData = JSON.parse(this.response);
    const asia = countryData.filter((element) => {
        if(element.region === 'Asia'){
            return element.name;
        }
    })
    console.log(asia);
}


//Get all the countries with population of less than 2 lacs using Filter function
let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', 'true');
request.send();
request.onload = function () {
    let countryData = JSON.parse(this.response);
    const population = countryData.filter((element) => {
        return element.population < 200000;
    })
    console.log(population);
}


//Print the following details name, capital, flag using forEach function.
let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', 'true');
request.send();
request.onload = function () {
    let countryData=JSON.parse(this.response);
    countryData.forEach((element) => {
        console.log(element.name, element.capital, element.flag);
    })
}


//Print the total population of countries using reduce function 
let request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all', 'true');
request.send();
request.onload = function () {
    let countryData = JSON.parse(this.response);
    const population = countryData.reduce((data, element)=>{
        return data + element.population;
    },0)
    console.log(population);
}


//Print the country which use US Dollars as currency.
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all", 'true')
request.send();
request.onload = () => {
    let data = JSON.parse(request.response)
    let curr = data.filter((dummy) => (dummy.currencies !== undefined))
    let realCurr = curr.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    for(i=0; i <= realCurr.length; i++) {
        let result = realCurr[i].name;
        console.log(result)
    }
}