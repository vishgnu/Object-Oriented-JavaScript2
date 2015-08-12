console.log('Hello world');


////Decorator functions
//var carlike = function (obj, loc) {
//	obj.loc = loc;
//	obj.move = function () {
//		obj.loc++;
//	};
//	return obj;
//};

///////
//// Here we want to call move with "dot access"
//var amy = carlike({}, 1);
//amy.move();
//var ben = carlike({}, 9);
//ben.move();


//console.log(ben.loc);
//console.log(amy.loc);


////functional Class pattern functions
//var carlike = function (loc) {
//	// construct
//	var obj = { loc: loc };
	
//	// functions
//	obj.move = move;
//	return obj;
//};

//var move = function() {
//	this.loc++;
//};

///////
//// Here we want to call move with "dot access"
//var amy = carlike({}, 1);
//amy.move();
//var ben = carlike({}, 9);
//ben.move();


//console.log(ben.loc);
//console.log(amy.loc);

//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************

////functional Class pattern many functions
//var Car = function (loc, gasLevel) {
//	// construct
//	var obj = { loc: loc, gasLevel :gasLevel};
//	// add functions	
//	extend(obj, Car.methods);
//	return obj;
//};


//// store methods in car class out of global scope
//Car.methods = {
//	move : function () {
//		this.loc++;
//	},
//	checkGas : function () {
//		return this.gasLevel;
//	}
//};

///////
//// Here we want to call move with "dot access"
//var amy = Car(1);
//amy.move();
//var ben = Car( 9);
//ben.move();


//console.log(ben.loc);
//console.log(amy.loc);

//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************


////functional Class pattern many functions and delegation rations via prototype pattern
//var Car = function (loc, gasLevel) {
//	// prototype pattern here
//	var obj = Object.create(Car.prototype);
	
//	// add other props
//	obj.loc = loc;
//	obj.gasLevel = gasLevel;

//	return obj;
//};

//// store methods for prototype
//Car.prototype.move = function () {
//		this.loc++;
//};
//Car.prototype.checkGas = function () {
//	return this.gasLevel;
//};

///////
//// Here we want to call move with "dot access"
//var amy = Car(1,100);
//amy.move();
//var ben = Car(9,10);
//ben.move();


//console.log(ben.loc);
//console.log(amy.loc);
//console.log(Car.prototype.constructor);
//// amy contructor fallthrough to Car.prototype.constructor
//console.log(amy.constructor);


//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************
//******************************************************************************************


// pseudo classSICAL CLASS pattern

var Car = function (loc, gasLevel) {
	// new keyword will run this under the hood
	//this = Object.create(Car.prototype);

	// add other props
	this.loc = loc;
	this.gasLevel = gasLevel;
	
	// will be done by new call
	//return this;
};

// store methods for prototype
Car.prototype.move = function () {
	this.loc++;
};
Car.prototype.checkGas = function () {
	return this.gasLevel;
};

/////
// Here we want to call move with "dot access"
// new for construction mode
var amy = new Car(1, 100);
amy.move();
var ben = new Car(9, 10);
ben.move();


console.log(ben.loc);
console.log(amy.loc);
console.log(Car.prototype.constructor);
// amy contructor fallthrough to Car.prototype.constructor
console.log(amy.constructor);

