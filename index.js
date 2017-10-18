var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item]: price });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  var stuff = []

  for (let i = 0; i < cart.length; i++) {
    var things = cart[i]
    var item = Object.keys(things)[0]
    var price = things[item]
    stuff.push(`${item} at $${price}`)
  }

  switch(stuff.length) {
    case 0:
      return console.log("Your shopping cart is empty.");
      break;
    case 1:
      break;
    case 2:
      stuff = stuff.join(" and ")
      break;
    default:
      stuff[cart.length-1] = "and ".concat(stuff[cart.length-1])
      stuff = stuff.join(", ")
  }
  console.log(`In your cart, you have ${stuff}.`)
}

function total() {
  var x = 0
  for (const [key, value] of Object.entries(cart)) {
    x += value;
  }
  return x;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      cart.splice(i, 1);
      break;
    }
  }
  if (cart.hasOwnProperty(item) === false) {
    console.log("That item is not in your cart.")
  }
  return cart;
}


function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log('Sorry, we don\'t have a credit card on file for you.')
  }
}
