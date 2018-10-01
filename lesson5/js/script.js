function Hamburger(size, stuffing) {
  if (arguments.length < 2) {
    console.log("Need more arguments");

  }
  if (Hamburger.allowSizes.indexOf(size) < 0) {
    console.log("invalid size");
  }
  if (Hamburger.allowStuffing.indexOf(stuffing) < 0) {
    console.log("invalid stuff");
  }

  this.size = size;
  this.stuffing = stuffing;
  this.toppings = [];
}

/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = {
  price: 50,
  cal: 20
};
Hamburger.SIZE_LARGE = {
  price: 100,
  cal: 40
};
Hamburger.STUFFING_CHEESE = {
  price: 10,
  cal: 20
};
Hamburger.STUFFING_SALAD = {
  price: 20,
  cal: 5
};
Hamburger.STUFFING_POTATO = {
  price: 15,
  cal: 10
};
Hamburger.TOPPING_MAYO = {
  price: 20,
  cal: 5
};
Hamburger.TOPPING_SPICE = {
  price: 15,
  cal: 0
};

Hamburger.allowToppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE];
Hamburger.allowSizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
Hamburger.allowStuffing = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD];


Hamburger.prototype.addTopping = function (topping){
  if (arguments.length != 1) {
    console.log("Need only one argument");
  }
  if (Hamburger.allowToppings.indexOf(topping) < 0)
  {
    console.log("Invalid topping");
  }
  this.toppings.push(topping);
};

Hamburger.prototype.removeTopping = function (topping){
  if (this.toppings.length <= 0) {
    console.log("Can't delete");
  }
  if (arguments.length != 1) {
    console.log("Need only one argument");
  }
  if (Hamburger.allowToppings.indexOf(topping) < 0) {
    console.log("Invalid topping");
  }
  for (let i = 0; i < this.getToppings().length; i++) {
    if (topping === this.getToppings()[i]) {
      this.toppings.splice(i,1);
      break;
      // delete  this.toppings[i];
    }
  }

};


Hamburger.prototype.getToppings = function (){
  return this.toppings ;
};


Hamburger.prototype.getSize = function () {
  return this.size;
};


Hamburger.prototype.getStuffing = function () {
  return this.stuffing;
};

Hamburger.prototype.calculatePrice = function (){
  let ownPrice = 0;
  ownPrice += this.getSize().price;
  ownPrice += this.getStuffing().price;
  for (let key in this.getToppings()) {
    ownPrice += this.getToppings()[key].price;
  }
  return ownPrice;

};


Hamburger.prototype.calculateCalories = function () {
  let calories = 0;
  calories += this.getSize().cal;
  calories += this.getStuffing().cal;
  for (let key in this.getToppings()) {
    calories += this.getToppings()[key].cal;
  }
  return calories;
};




// маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);


// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_SPICE);

console.log(hamburger);
// hamburger.removeTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log("Calories: %f", hamburger.calculateCalories());
// сколько стоит
console.log("Price: %f", hamburger.calculatePrice());
// я тут передумал и решил добавить еще приправу


// А сколько теперь стоит?
console.log("Price with sauce: %f", hamburger.calculatePrice());
// Проверить, большой ли гамбургер?
console.log("Is hamburger large: %s", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
hamburger.removeTopping(Hamburger.TOPPING_MAYO);



console.log("Have %d toppings", hamburger.getToppings().length); // 1

// console.log(this.toppings[Hamburger.TOPPING_SPICE]);
console.log(hamburger);
