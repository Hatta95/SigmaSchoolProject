function numprompt(question){
  return parseFloat(prompt(question));
}
function add (){
  const firstNumber = numprompt('Enter the first number?');
  const secondNumber = numprompt('Enter the second number?');
  const result = firstNumber + secondNumber;
  alert("The result is:" + result);
}
function subtract (){
  const firstNumber = numprompt('Enter the first number?');
  const secondNumber = numprompt('Enter the second number?');
  const result = firstNumber - secondNumber;
  alert("The result is:" + result);
}
function multiply (){
  const firstNumber = numprompt('Enter the first number?');
  const secondNumber = numprompt('Enter the second number?');
  const result = firstNumber * secondNumber;
  alert("The result is:" + result);
}
function divide (){
  const firstNumber = numprompt('Enter the first number?');
  const secondNumber = numprompt('Enter the second number?');
  const result = firstNumber / secondNumber;
  alert("The result is:" + result);
}
function simpleInterest (){
  const principal = numprompt('Enter the initial balance?($)');
  const interestRate = numprompt('Enter the interest rate?(%)') / 100;
  const years = numprompt('Enter the duration?(years)');
  const result = principal * (interestRate) * years;
  alert("The result is:" + result);
}
function compoundInterest (){
  const principal = numprompt('Enter the initial balance?($)');
  const interestRate = numprompt('Enter the interest rate?(%)') / 100;
  const numInterestCompounded = numprompt('How many times interest is compounded per year?');
  const years = numprompt('Enter the duration?(years)');
  const result = principal * (1 + interestRate / numInterestCompounded) ** (numInterestCompounded * years);
  alert("The result is:" + result.toFixed(2));
}