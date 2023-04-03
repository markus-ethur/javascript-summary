
const set = new Set();

set.add('Markus')
set.add(1);
set.add(1);
set.add(1);
set.add(1);

set.add('Audi');
set.add('Audi');
set.add('Audi');
set.add('Audi');

set.add(3);

set.add('Car');
set.add('Audi');

set.add('XyZ');
set.add('Car');


set.add('xyz');
set.add('Markus');

set.add('markus')


console.log('set.has("Audi")', set.has('Audi'));

// set.delete('XyZ')

console.log('set', set);
console.log('set.entries()', set.entries());
console.log('set.keys()', set.keys());
console.log('set.values()', set.values());

console.log('------------------- iterable like array!')
for (let s of set) {
  console.log(s)
}


// clean set
set.clear();