const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 4,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 3,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}, {
  name: 'Gummy Worms',
  price: 1,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 3,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

// console.log('is it workin?');
let iceCreamTotal = 0
let toppingsTotal = 0
let waffleConsTotal = 0

function addContainers(name) {
  const waffleCons = containers.find(w => w.name == name)
  waffleCons.quantity++
  waffleConsTotal += waffleCons.price
  console.log(waffleCons.name, waffleConsTotal);

  drawCardWaffle()
  calculateTotal()
}

function drawCardWaffle() {
  // console.log('add waffles');
  let total = 0
  let template = ''
  containers.forEach(w => {
    total += w.price * w.quantity
  // console.log('total waffles', total)  
    if (w.quantity) {
      template += `
      <div class="col-5">${w.name}</div><div class="col-2">${w.quantity}</div><div class="col-2">$${w.price.toFixed(2)}</div><div class="col-3 text-center">$${(w.quantity * w.price).toFixed(2)}</div>
      `
    }
  })
  
  document.getElementById('waffles').innerHTML = template
}


function addIceCreamScoop(name2) {
  // console.log('adding ice cream', name);
  const iceCreamScoop = iceCream.find(ice => ice.name == name2)
iceCreamScoop.quantity++
iceCreamTotal += iceCreamScoop.price
console.log(iceCreamScoop.name);

drawCard()
calculateTotal()
}

function drawCard() {
  let total = 0
  let template = ''
  iceCream.forEach(ice => {
    total += ice.price * ice.quantity

    if (ice.quantity) {
      template += `
      <div class="col-5">${ice.name}</div><div class="col-2">${ice.quantity}</div><div class="col-2">$${ice.price.toFixed(2)}</div><div class="col-3 text-center">$${(ice.quantity * ice.price).toFixed(2)}</div>
      `
    }
  })
  document.getElementById('items').innerHTML = template
  // console.log('total', total);
}

function addToppings(name) {
  const differentToppings = toppings.find(top => top.name == name)
  differentToppings.quantity++
  toppingsTotal += differentToppings.price
  console.log(differentToppings.name);
  drawToppings()
  calculateTotal()
}

function drawToppings() {
  let total =0
  let template = ""
  toppings.forEach(top => {
    total += top.price * top.quantity
    if (top.quantity){
      template += `
      <div class="col-5">${top.name}</div><div class="col-2">${top.quantity}</div><div class="col-2">$${top.price.toFixed(2)}</div><div class="col-3 text-center">$${(top.quantity * top.price).toFixed(2)}</div>
      `
    }
  })
  document.getElementById('toppings').innerHTML = template
}


function calculateTotal() {
  const totalPrice = iceCreamTotal + toppingsTotal + waffleConsTotal;
  document.getElementById('total').innerHTML = `$${totalPrice.toFixed(2)}`;
    console.log(totalPrice, 'total');
    return totalPrice;
  }
  

function pay(){
  let buy = calculateTotal()

  if (buy > 0){
    window.alert('Are you ready for checkout?')
  } else {
    window.alert('Your card is empty!')
  }
  
}

