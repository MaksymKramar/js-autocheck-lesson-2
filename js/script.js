// Задача 1
function checkAge(age) {
  if (age>=18) { // Дополни эту строку
    return 'Вы совершеннолетний человек';
  }

  return 'Вы не совершеннолетний человек';
}

// Задача 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки


  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }   

  return 'Доступ запрещен, неверный пароль!';
  // Пиши код выше этой строки
}


// Задача 3
function checkStorage(available, ordered) {
  // Пиши код ниже этой строки
  

  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  } 
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  } 

  return 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
}

// Задача 4
// Пиши код ниже этой строки
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];


// Задача 5
// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// Задача 6
// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
fruits[1]='персик';
fruits[3] = 'банан';

// Задача 7
// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const fruitsArrayLength = fruits.length;

// Задача 8
// Стартовый код
const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// Пиши код ниже этой строки
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// Задача 9
function getExtremeElements(array) {
    // Пиши код ниже этой строки
    

    return [array[0], array[array.length - 1]];

    // Пиши код выше этой строки
}
  
// Задача 10
function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки
  
 words = message.split(`${delimeter}`);
  
  // Пиши код выше этой строки
  return words;
}

// Задача 11
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

return message.split(' ').length * pricePerWord;
  // Пиши код выше этой строки
}

// Задача 12
function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки
 
 
  string = array.join(`${delimeter}`);
 
  // Пиши код выше этой строки
  return string;
}

// Задача 13
function slugify(title) {
  // Пиши код ниже этой строки
 
 return slug = title.toLowerCase().split(' ').join('-');
 
  // Пиши код выше этой строки
}

// Задача 14
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// Пиши код ниже этой строки
const firstTwoEls = fruits.slice(0,2);
const nonExtremeEls = fruits.slice(1,fruits.length - 1);
const lastThreeEls = fruits.slice(-3);

// Задача 15
const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
const newClients = ['Персик', 'Хьюстон'];

const allClients = oldClients.concat(newClients); // Дополни эту строку

// Задача 16
function makeArray(firstArray, secondArray, maxLength) {
    // Пиши код ниже этой строки
let newArray = firstArray.concat(secondArray);
  if (newArray.length > `${maxLength}`){
  return newArray.slice(0,maxLength);}
  else{
  return newArray;}

    
    // Пиши код выше этой строки
}
  
// Задача 17
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Дополни эту строку
  console.log(i);
}

// Задача 18
function calculateTotal(number) {
  // Пиши код ниже этой строки

 let sum = 0;
   for (let i = 0; i <= number; i += 1) {
    sum += i;
   }
   return sum;

  // Пиши код выше этой строки
}

// Задача 19
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i<fruits.length; i+=1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

// Задача 20
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
  for (let i = 0; i < order.length; i+=1) {
    total += order[i];    
  }

  // Пиши код выше этой строки
  return total;
}

// Задача 21
function findLongestWord(string) {
  // Пиши код ниже этой строки
  let words = string.split(' ');
  let longestWord = words[0];
  for (let word of words) {
  if(word.length > longestWord.length){
  longestWord = word;
  }    
  }
  return longestWord;

  // Пиши код выше этой строки
}

// Задача 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
for (let i = min; i <= max; i+=1) {
  numbers.push(i);
  
}
  // Пиши код выше этой строки
  return numbers;
}

// Задача 23
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let newArray = [];
  for (let number of numbers) {
  if (number > value) {
    newArray.push(number);
  }
}
   return newArray; 

}

// Задача 24
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit) ? true : false; // Дополни эту строку
}

// Задача 25
function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки
  let newCommonElements = [];

  for (element  of array1) {
    if (array2.includes(element)) {
      newCommonElements.push(element);
    }
  }
  return newCommonElements;
  // Пиши код выше этой строки
}

// Задача 26
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки
for(const totals of order ) {
   total+=totals;
  }

  // Пиши код выше этой строки
  return total;
}

// Задача 27
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  } 

  return filteredNumbers;
  // Пиши код выше этой строки
}

// Задача 28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 6;

// Задача 29
function getEvenNumbers(start, end) {
    // Пиши код ниже этой строки
  let evenArray = [];
  for (let i = start; i <= end; i += 1) {
  if (i%2===0) {
    evenArray.push(i);
  }  
}
  return evenArray;
    // Пиши код выше этой строки
}

// Задача 30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {    
    number = i;
    break;
  }
}

// Задача 31
function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  return number;
  // Пиши код выше этой строки
}

// Задача 32
function includes(array, value) {
  // Пиши код ниже этой строки

for (const val of array) {
  if (val === value) {
    return true;
  }
}
  return false;
  // Пиши код выше этой строки
}