// Get global access to all inputs
const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

// Get number of people from number of people div
let numberofPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
  let bill = Number(billInput.value);
  let tipPercentage = Number(tipInput.value) / 100;
  let tipAmount = bill * tipPercentage;
  let total = tipAmount + bill;

  perPersonTotal = total / numberofPeople;
  console.log({ perPersonTotal });
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberofPeople += 1;
  numberOfPeopleDiv.innerText = numberofPeople;
  calculateBill();
};

const decreasePeople = () => {
 
  if (numberofPeople <= 1) {
    return;
  }
  numberofPeople -= 1;
  numberOfPeopleDiv.innerText = numberofPeople;
  calculateBill();
};
