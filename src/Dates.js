
const { debug, _ } = require('./util/debug')

// new Date(year, month, day, hour, minute, second, milisecond);
// new Date(dateString);
const date = new Date('2023-03-29T10:11:22.333Z');
// 2023-03-29T10:11:22.333Z

const parse = Date.parse('2023-03-29T10:11:22.333Z');
// 1680084682333

console.log(date.getTime())

const dateSplitted = new Date('1990', '11', '16', '10', '30', '15', '373');
// 1990-12-16T12:30:15.373Z

const day = date.getDate(); // 29
const month = date.getMonth()+1; // 3
const year = date.getFullYear(); // 2023
const hour = date.getHours(); // 7
const minute = date.getMinutes(); // 11
const second = date.getSeconds(); // 22
const milisecond = date.getMilliseconds(); // 333
// 29 2 2023 7 11 22 333

const toTimeString = date.toTimeString(date);
// 07:11:22 GMT-0300 (Brasilia Standard Time) 

const GMTlocale = date.toLocaleTimeString('pt-BR');

debug('date :::', date);
debug('parse :::', parse);
debug('day, month, hour, minute, second, milisecond :::',
  day, month, year, hour, minute, second, milisecond
);
debug('GMTlocale', GMTlocale);
debug('toTimeString', toTimeString);

_();

const dayS = dateSplitted.getDate();
const monthS = dateSplitted.getMonth();
const yearS = dateSplitted.getFullYear();
const hourS = dateSplitted.getHours();
const minuteS = dateSplitted.getMinutes();
const secondS = dateSplitted.getSeconds();
const milisecondS = dateSplitted.getMilliseconds();

debug('dateSplitted', dateSplitted);
debug('dayS, monthS, hourS, minuteS, secondS, milisecondS :::',
  dayS, monthS, yearS, hourS, minuteS, secondS, milisecondS
);
_();