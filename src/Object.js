const { debug, _ } = require('./util/debug');




const obj = { name: 'Markus' };


function json(o) {
  return JSON.stringify(o);
}


debug(`obj ::: ${json(obj)}`);
debug(`obj.hasOwnProperty ::: ${obj.hasOwnProperty('name')}`);
debug(`Object.assign() ::: ${json(Object.assign(obj, { lastName: 'Ethur' }))}`);

_()

const person = {
  name: "Markus",
  printIntroduction: function () {
    debug(`My name is ${this.name}`);
  }
};
const obj2 = Object.create(person);

debug(obj2.name)

obj2.printIntroduction()

_()

const obj4 = { name: "Markus", lastName: "Ethur" }

debug(`Object.entries() ::: ${Object.entries(obj4)}`);

for (const [key, value] of Object.entries(obj4)) {
  console.log(`${key}: ${value}`);
}

_()

const obj3 = {};
Object.defineProperties(obj3, {
	name: {
		value: "Markus",
		writable: false
  },
  lastName: {
    value: "Ethur",
    writable: true
  }
})
obj3.name = "Sukram";
obj3.lastName = "Ruthe";

debug(`obj3 ::: ${obj3.name} ${obj3.lastName}`);

_()