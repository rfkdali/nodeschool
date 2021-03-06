// -> Define two constructor functions: 'Robot' and 'Vehicle'
// -> When called with 'new', the Robot constructor function should return 
//    the implicit 'this'
// -> When called with 'new', the Vehicle constructor function should return 
//    an object of your own making, not the implicit 'this'.

function Robot() {
	
}

function Vehicle() {
	var test = {}
	return test
}

var test = new Robot();
var test2 = new Vehicle();

// ------------------------------------------------
// Common JS exports for verification, don't modify
module.exports = {
	Robot:    Robot,
	Vehicle:  Vehicle
}
