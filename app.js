 const curencyrate = ("https://v6.exchangerate-api.com/v6/3df71cae0ac8ec1d20f8676a/latest/USD")

 const selector = document.querySelectorAll(".Convertor1")
const exchangerate = document.querySelector(".exchange-rate")
const but = document.querySelector("button")
const fromcurr = document.querySelector(".From select")
const tocurr = document.querySelector(".to select")

for(let select of selector) {

for( let currcode in countryList){
    let newoption = document.createElement("option")
   newoption.innerText = currcode;
   newoption.value = currcode;
   select.append(newoption);
}
 select.addEventListener("change", 
    (evt) => {
    updateFlag(evt.target)
    }
 ) 
}

 const updateFlag =  (element) => {
    let currcode = element.value 
    let countrycode = countryList[currcode]
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`
     let img = element.parentElement.querySelector("img")
     img.src = newsrc
 }

 but.addEventListener("click" , async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".label input")
  let autval = amount.value;
  console.log(autval)
  if ( autval === "" || autval < 1) {
    autval = "0";
    amount.value = "0"
  }
const URL = `https://v6.exchangerate-api.com/v6/3df71cae0ac8ec1d20f8676a/latest/${fromcurr.value}/`
  let res = await fetch(URL)
  let  data = await res.json()
  let convertedrate = data.conversion_rates[tocurr.value]
 let rate = amount.value * convertedrate

 exchangerate.innerText = `${autval}${fromcurr.value} = ${rate}${tocurr.value}`
 }
 )
