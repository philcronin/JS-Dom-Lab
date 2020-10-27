"use strict";

// NUMBER 1 //

let total = 0;

let limeButton = document.querySelector(".limeButton");
limeButton.addEventListener("click", () => {
  let limePrice = parseFloat(limeButton.getAttribute("data-price"));
  total += limePrice;
  totalCounter.innerText = `Total: $ ${total}`;
  console.log(total.toFixed(2));
});

let peanutButton = document.querySelector(".peanutButton");
peanutButton.addEventListener("click", () => {
  let peanutPrice = parseFloat(peanutButton.getAttribute("data-price"));
  total += peanutPrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let chocolateButton = document.querySelector(".chocolateButton");
chocolateButton.addEventListener("click", () => {
  let chocolatePrice = parseFloat(chocolateButton.getAttribute("data-price"));
  total += chocolatePrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let gummieButton = document.querySelector(".gummieButton");
gummieButton.addEventListener("click", () => {
  let gummiePrice = parseFloat(gummieButton.getAttribute("data-price"));
  total += gummiePrice;
  totalCounter.innerText = `Total: $${total}`;
  console.log(total.toFixed(2));
});

let totalCounter = document.querySelector(".counter");
totalCounter.innerText = `Total: $${total}`;

// NUMBER 2 //

let makeMoney = document.querySelector(".makeMoney");
makeMoney.addEventListener("submit", (e) =>{
	e.preventDefault();
	let formData = new FormData(makeMoney);
	let howMany = formData.get("howMany");
	let whichCoin = formData.get("whichCoin");
	// console.log(howMany, whichCoin);
	for(let i = 1; i <= howMany; i++){
		let addCoin = document.createElement("div")
		addCoin.innerText = `${whichCoin}`
		let coinCont = document.querySelector(".coin-container");
		coinCont.append(addCoin);
		addCoin.addEventListener("click", () => {
			addCoin.remove();
		})
		if(whichCoin === "Penny"){
			addCoin.classList.add("pennyStyle")
		}else if (whichCoin === "Nickel"){
			addCoin.classList.add("nickelStyle")
		}else if (whichCoin === "Dime"){
			addCoin.classList.add("dimeStyle")
		}else{
			addCoin.classList.add("quarterStyle")
		};
	}
	makeMoney.reset();
});

//////// Number 3 ////////
console.log("Number 3")
let lightBulb = document.querySelector(".light-bulb");
let lightBulbContainer = document.querySelector(".light-bulb-container");
let onbutton = document.querySelector(".onbutton")
let offbutton = document.querySelector(".offbutton")
let togglebutton = document.querySelector(".togglebutton")
let endbutton = document.querySelector(".endbutton")
let opbutton = document.querySelectorAll(".opbutton")
onbutton.addEventListener("click", () => {
    lightBulb.classList.add("on");
});
offbutton.addEventListener("click", ()=> {
    lightBulb.classList.remove("on");
});
togglebutton.addEventListener("click", ()=> {
    lightBulb.classList.toggle("on");
});
endbutton.addEventListener("click", () => {
	lightBulb.remove();
	opbutton.forEach((button) => {
		button.disabled = true;
	});
});