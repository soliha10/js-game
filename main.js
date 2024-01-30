// RANDOM
var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elResult = document.querySelector(".js-random-result");
var elAttemptNum = document.querySelector(".attempt-num")

var maxAttemptCount = 6;
var randomNumber = Math.floor(Math.random() * 100);
elAttemptNum.textContent = `Attempt number: ${maxAttemptCount}`;
console.log(randomNumber);
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputValue = Number(elInput.value);
  if (maxAttemptCount > 0) {
    
    maxAttemptCount--;
    elAttemptNum.textContent = `Attempt number: ${maxAttemptCount}`;
    if (inputValue > randomNumber) {
      elResult.textContent = "Your number is higher than random number";
      elInput.value = "";
    }
    else if (inputValue < randomNumber) {
      elResult.textContent = "Your number is less than random number";
      elInput.value = "";
    }
    else if (inputValue == randomNumber) {
      elResult.textContent = "Your answer is correct!";
      elInput.value = "";
      elInput.setAttribute("disabled", true);
      elForm.querySelector("button").setAttribute("disabled", true);
    }
    else {
      elResult.textContent = "Incorrect";
    }
  }
  else {
    elResult.textContent = "Your choices are over!"
  }
})


// CURRENCY
// var elCurrencyForm = document.querySelector(".currency-form");
// var elCurrencyInput = elCurrencyForm.querySelector(".currency-input");
// var elSelect = elCurrencyForm.querySelector(".js-select");
// var elCurrencyResult = document.querySelector(".js-currency-result");

// var USA_VALUE = 12400;
// var RUBL_VALUE = 200;
// var EURO_VALUE = 20000;

// elCurrencyForm.addEventListener("submit", function(evt) {
//   evt.preventDefault();
//   var inputValue = Number(elCurrencyInput.value);
//   var selectValue = elSelect.value;
//   var res;
//   debugger;
//   if (inputValue && inputValue.length && selectValue.length){
//     if(selectValue === "USD") {
//       res = inputValue*USA_VALUE;
//       elCurrencyResult.textContent=`the amount equals to $ ${res} `;
//       // console.log(inputValue*USA_VALUE);
//     }
//     else if(selectValue === "RUBL") {
//       elCurrencyResult.textContent=`the amount equals to  ${inputValue} * ${RUBL_VALUE}rubl `;
//     }
//     else if(selectValue === "EURO") {
//       elCurrencyResult.textContent=`the amount equals to $ ${inputValue} * ${EURO_VALUE}euro `;
//     }
//     console.log(inputValue);
//   }
//   else {
//     elCurrencyResult.textContent="Enter amount";
//   }
// })


var elCurrencyForm = document.querySelector(".currency-form");
var elCurrencyInput = elCurrencyForm.querySelector(".currency-input");
var elSelect = elCurrencyForm.querySelector(".js-select");
var elCurrencyResult = document.querySelector(".js-currency-result");

elCurrencyForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var inputValue = Number(elCurrencyInput.value);
  var selectValue = Number(elSelect.value);
  elCurrencyResult.textContent = inputValue * selectValue + " so'm";
  elCurrencyResult.textContent = inputValue * selectValue;

  // var res ;
  // debugger;
  // if (!isNaN(inputValue) && selectValue.length) {
  //   if (selectValue === "USD") {
  //     res = inputValue * USA_VALUE;
  //   }
  //   else if (selectValue === "RUBL") {
  //     res = inputValue * RUBL_VALUE;
  //   }
  //   else if (selectValue === "EURO") {
  //     res = inputValue * EURO_VALUE;
  //   }
  //   elCurrencyResult.textContent=`the amount equals to ${res} ${selectValue}  `;
  //   console.log(inputValue * USA_VALUE, res);
  // }
  // else {
  //   elCurrencyResult.textContent = "Enter amount";
  // }

  // if (selectValue === "USD") {
  //   elCurrencyResult.textContent = USA_VALUE;
  //   console.log(USA_VALUE);
  // } else if (selectValue === "RUBL") {
  //   elCurrencyResult.textContent = RUBL_VALUE;
  // }
  // else if (selectValue === "EURO_VALUE") {
  //   elCurrencyResult.textContent = EURO_VALUE;
  // }
  // else {
  //   console.log("error");
  // }
});
