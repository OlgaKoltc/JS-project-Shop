const productBtn = document.querySelectorAll('.item-product__button');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart__quantity');
const fullPrice = document.querySelector('.cart__fullPrice_summ');

const printQuantity = () => {
    let lenght = cartProductsList.children.
    length;
    cartQuantity.textContent = lenght;
    lenght > 0 ? cartQuantity.classList.add('active') : cartQuantity.classList.remove('active')
};

const generateCartProduct = (id, img, name, price) => {
    return `
    <li class="cart-content__item">
    <div class="cart-product__item" data-id="${id}">
    <div class="cart-product__img">
        <img src="${img}" />
    </div>
    <div class="cart-product__content">
     <div class="cart-product__name">${name}</div>
     <span class="cart-product__price">${price}</span>
     <input class="cart-product__quantity" type="number" min="1" max="12" value="1"></input>
    </div>
    <button class="cart-product__delete">X</button>
    </div>
    </li>
    `;
}
productBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.item-product');
        let id = parent.getAttribute('data-id');
        let img = parent.querySelector('img').getAttribute('src');
        let name = parent.querySelector('.item-product__name').textContent;
        let price = parent.querySelector('.item-product__price-now').textContent;
      
        cartProductsList.insertAdjacentHTML('afterbegin', generateCartProduct(id,img,name,price))
        printQuantity();
        
         // let cleanPrice = normalPrice.replace(/([Rp])|(\.)/g, '');
    });
});

cart.addEventListener('click', function() {
    document.querySelector('.cart-content').classList.add('active');
    const delBtn = cartProductsList.querySelectorAll('.cart-product__delete');
    delBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            el.closest('.cart-content__item').remove();
        });
    });

});
cart.addEventListener('dblclick', function() {
   
    document.querySelector('.cart-content').classList.remove('active')
});