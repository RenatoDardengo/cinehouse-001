var catalago = require ("./catalago.json");
console.log(catalago);
var catalagoString = JSON.stringify(catalago)
console.log (catalagoString)
var catalagoObj = JSON.parse (catalagoString)
console.log (catalagoObj)