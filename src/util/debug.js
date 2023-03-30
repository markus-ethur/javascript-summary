function debug(...data) {
  console.log(...data);
}

function _() {
  const line = '-'.repeat(process.stdout.columns)
  console.log(line)
}


module.exports = {
  debug, 
  _
}