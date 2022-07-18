var books = ['hablu', 'bolod', 'choddugusti', 'bettery', 'perasitamol', 'gymnesium'];

var betteryIndex = books.indexOf('bettery');
console.log(betteryIndex);

var numbers = [78, 45, 65, 82, 37];
var index = numbers.indexOf(65);
var index_undefined = numbers.indexOf(78);
console.log(index);
console.log(index_undefined);

// how to find index value of an array
var secondIndex = books[2];
console.log(secondIndex);
// if array index search is greater than the array length then the console.log result will be- undefined

// changing index value of an array
numbers[1] = 100;
console.log(numbers);