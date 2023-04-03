var results = [[],[],[]]

for(let i = 0; i < 100; i++){
  const randomArrayGen = () => Array.from({length: 10000}, () => Math.random().toString(30));
  const randomArray = randomArrayGen();
  const copyArray = x => x.slice();

  obj = copyArray(randomArray);
  let t0 = performance.now();
  obj.sort().reverse();
  let t1 = performance.now();

  obj = copyArray(randomArray);
  let t2 = performance.now();
  obj.sort((a, b) => (a > b ? -1 : 1))
  let t3 = performance.now();

  obj = copyArray(randomArray);
  let t4 = performance.now();
  obj.sort((a, b) => b.localeCompare(a))
  let t5 = performance.now();  

  results[0].push(t1 - t0);
  results[1].push(t3 - t2);
  results[2].push(t5 - t4);  
}

const calculateAverage = x => x.reduce((a,b) => a + b) / x.length ;

console.log("obj.sort().reverse():                   " + calculateAverage(results[0]));
console.log("obj.sort((a, b) => (a > b ? -1 : 1)):   " + calculateAverage(results[1]));
console.log("obj.sort((a, b) => b.localeCompare(a)): " + calculateAverage(results[2]));