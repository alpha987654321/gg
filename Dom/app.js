const hamburgerInput = document.getElementsByName("hamburger-quantity")[0];
const pizzaInput = document.getElementsByName("pizza-quantity")[0];
const friesInput = document.getElementsByName("fries-quantity")[0];
const totalEl = document.querySelector(".total");
const checkoutBtn = document.querySelector(".checkout-btn");

let hamburgerQuantity = 0;
let pizzaQuantity = 0;
let friesQuantity = 0;

function updateTotal() {
	const hamburgerPrice = 369;
	const pizzaPrice = 319;
	const friesPrice = 193;

	const hamburgerTotal = hamburgerQuantity * hamburgerPrice;
	const pizzaTotal = pizzaQuantity * pizzaPrice;
	const friesTotal = friesQuantity * friesPrice;

	const total = hamburgerTotal + pizzaTotal + friesTotal;
	totalEl.innerText = total;
}

function handleMinusBtnClick(event) {
	const input = event.target.nextElementSibling;
	const product = input.name.split("-")[0];

	switch (product) {
		case "iphone 14 pro max":
			if (hamburgerQuantity > 0) {
				hamburgerQuantity--;
				input.value = hamburgerQuantity;
			}
			break;
		case "iphone 11":
			if (pizzaQuantity > 0) {
				pizzaQuantity--;
				input.value = pizzaQuantity;
			}
			break;
		case "ipad":
			if (friesQuantity > 0) {
				friesQuantity--;
				input.value = friesQuantity;
			}
			break;
		default:
			break;
	}

	updateTotal();
}

function handlePlusBtnClick(event) {
	const input = event.target.previousElementSibling;
	const product = input.name.split("-")[0];

	switch (product) {
		case "hamburger":
			hamburgerQuantity++;
			input.value = hamburgerQuantity;
			break;
		case "pizza":
			pizzaQuantity++;
			input.value = pizzaQuantity;
			break;
		case "fries":
			friesQuantity++;
			input.value = friesQuantity;
			break;
		default:
			break;
	}

	updateTotal();
}

function handleCheckoutBtnClick() {
	alert(`You have ordered ${hamburgerQuantity} iphone 14 pro max, ${pizzaQuantity} iphone 11
		and ${friesQuantity} ipad. Your total amount is $${totalEl.innerText}.`);
	hamburgerQuantity = 0;
	pizzaQuantity = 0;
	friesQuantity = 0;
	hamburgerInput.value = 0;
	pizzaInput.value = 0;
	friesInput.value = 0;
	totalEl.innerText = 0;
}

const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");

minusBtns.forEach(minusBtn => {
	minusBtn.addEventListener("click", handleMinusBtnClick);
});

plusBtns.forEach(plusBtn => {
	plusBtn.addEventListener("click", handlePlusBtnClick);
});

checkoutBtn.addEventListener("click", handleCheckoutBtnClick);