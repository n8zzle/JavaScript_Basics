let menu = {
  pizza: 10,
  doner: 5,
  pasta: 12,
};

function Multiply(menu) {
  for (let key in menu) {
    let value = 0;
    value = menu[key] * 2;
    menu[key] = value;
    console.log(value);
  }
}

//before
console.log("Pizza const before function:" + menu.pizza);
Multiply(menu);
console.log("Pizza const after function:" + menu.pizza);
