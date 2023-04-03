const { debug, _ } = require('./util/debug');


const arr1 =  [4, 3, 2, 2, 9, 12, 11, 5, 5, 6];

debug('arr1 before sort :::', arr1);

// sort ASC
arr1.sort((a, b) => { return a-b });
debug('arr1 sort ASC :::', arr1);

const lowest = arr1[0];
debug('arr1 lowest :::', lowest);

// sort DESC
arr1.sort((a, b) => { return b-a });
debug('arr1 sort DESC :::', arr1);

const highest = arr1[0];
debug('arr1 highest :::', highest);

const arr2 = ["A", "B", "C", "D", "E"];

const concat = ['test'].concat(arr2);
debug('concat :::', concat);

_();

// target, start, end
// debug(arr2.copyWithin(1, 3)) ??????

// in = index
// of = value
for (let a in arr2) {}

const arr3 = [11, 22, 32, 12, 45, 68, 44, 23];

const checkHigherThan30 = (value) => value > 30;

// check if all elements are higher than 30 and return true
const every = arr3.every(checkHigherThan30);
debug('every :::', arr3.every(checkHigherThan30))

// replace F in the position 0 until 3
debug(arr2.fill("F", 0, 3))


// filter higher than 30
debug('filter :::', arr3.filter(v => v > 30));

// find the first element with the value
debug('find :::', arr3.find(v => v > 40))

debug('join :::', arr3.join('x'));

// arr3.pop() - remove the last item from array

Array.prototype.test = () => {
  return '1';
}

// sum of all numbers
const reduce = arr3.reduce((previousValue, currentValue, currentIndex) => {
  // debug(previousValue, currentValue, currentIndex);
  return previousValue + currentValue;
})
// debug(reduce);
// debug('reverse :::', arr3.reverse());

// return a slice of array (start, end)
const slice = arr3.slice(0, 3);
debug('slice :::', slice);

const arr4 = ['a','b','c','d','e'];
// insert x in the position 3 
// 0 = how many items need to me removed after
arr4.splice(3, 0, 'X');
// ['a','b','c','X','d','e']

debug('splice :::', arr4);

// insert items in the begning of array
arr4.unshift('a1', 'a2');

debug(arr4);



// const arr5 = [8,9,2,6,3,7,4,1,2,7,9,4];

const arr5 = ['Helicopter', 'Toyota', 'BMW', 'Mercedez', 'Audi', 'Toyota', 'Nissan', 'Ferrari', 'Ferrari', 'BMW', 'Audi', 'Audi']


console.log('---- arr5', arr5);

const uniqueArr5 = [...new Set(arr5)];

console.log('---- new Set(arr5)', new Set(arr5));
console.log('---- uniqueArr5', uniqueArr5);
console.log('---- uniqueArr5.sort()', uniqueArr5.sort());


console.log('---- uniqueArr5.sort() DESC',
uniqueArr5.sort((a, b) => (a > b ? -1 : 1)));