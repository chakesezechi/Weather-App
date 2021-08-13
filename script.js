// API KEY
const key = "e7351e78127bf42cf6121f7cb7225706"

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getInput);

function getInput(e) {
  if(e.type === "click"){
    getData(search.value);
    
  }
  
  
  e.preventDefault();
}

function getData() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=${key}`)
    .then(response => {
      return response.json();
    }).then(displayData);
}

