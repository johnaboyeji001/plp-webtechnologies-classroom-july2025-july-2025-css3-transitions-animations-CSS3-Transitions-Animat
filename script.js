/* script.js */
// Animate product card
function animateCard(id){
  const card = document.getElementById(id);
  card.classList.add('animate');
  setTimeout(()=> card.classList.remove('animate'), 1000);
}

// Calculate price
function calculatePrice(quantity, pricePerItem){
  return quantity * pricePerItem;
}

document.getElementById('calcBtn').addEventListener('click', ()=>{
  const qty = parseInt(document.getElementById('quantity').value);
  if(isNaN(qty) || qty <= 0){
    document.getElementById('priceResult').textContent = 'Enter a valid quantity';
  } else {
    const price = calculatePrice(qty, 150);
    document.getElementById('priceResult').textContent = `Total Price: ₦${price}`;
  }
});

// Modal functionality
const modal = document.getElementById('offerModal');
document.getElementById('offerBtn').addEventListener('click', ()=>{
  modal.style.display = 'flex';
});
document.getElementById('closeModal').addEventListener('click', ()=>{
  modal.style.display = 'none';
});

// Demonstrate scope
let globalDiscount = 0.2; // global scope
function getFinalPrice(basePrice){
  let discountAmount = basePrice * globalDiscount; // local scope
  return basePrice - discountAmount;
}
