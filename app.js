//
 let menu = {
  
  _meal: '',
  _price: 0,
set meal(mealToCheck) {
  if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
  }
},
set price(priceToCheck) {
  if(typeof priceToCheck === 'number'){
     return this._price = priceToCheck
  }
},
get todaysSpecial() {
  if(this._meal && this._price){
    return `Todays special is ${this._meal} for $${this._price}`
  }
}
 }
 
menu.meal = 'pizza';
menu.price = 25
console.log(menu.todaysSpecial)



