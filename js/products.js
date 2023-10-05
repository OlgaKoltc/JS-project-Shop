const CATALOG =
  [{
    id: "el1",
    image: "images/images_products/chair.jpg",
    name: "Syltherine",
    sort: "Stylish cafe chair",
    price: "Rp 2.500.000",
    price2: "Rp 3.500.000",
    labelsale: "-30%",
  },
  {
    id: "el2",
    image: "images/images_products/sofa.jpg",
    name: "Lolito",
    sort: "Luxury big sofa",
    price: "Rp 7.000.000",
    price2: "Rp 14.000.000",
    labelsale: "-50%",
  },
  {
    id: "el3",
    image: "images/images_products/fan.jpg",
    name: "Respira",
    sort: "Minimalist fan",
    price: "Rp 500.000",
    labelnew: "New",
  },
  {
    id: "el4",
    image: "images/images_products/lamp.jpg",
    name: "Grifo",
    sort: "Night lamp",
    price: "Rp 1.500.000",
  },
  {
    id: "el5",
    image: "images/images_products/mug.jpg",
    name: "Muggo",
    sort: "Small mug",
    price: "Rp 150.000",
    labelnew: "New",
  },
  {
    id: "el6",
    image: "images/images_products/bed-set.jpg",
    name: "Pingky",
    sort: "Cute bed set",
    price: "Rp 7.000.000",
    price2: "Rp 14.000.000",
    labelsale: "-50%",
  },
  {
    id: "el7",
    image: "images/images_products/chair2.jpeg",
    name: "Leviosa",
    sort: "Stylish cafe chair",
    price: "Rp 2.500.000",
  },
  {
    id: "el8",
    image: "images/images_products/fan.jpg",
    name: "Potty",
    sort: "Minimalist flower pot",
    price: "Rp 500.000",
    labelnew: "New",
  }];
class Products {

  render() {

    let htmlCatalog = "";

    CATALOG.forEach(({ id, labelsale, labelnew, image, name, sort, price, price2 }) => {
      htmlCatalog += `<div class="item-product" data-id="${id}">` +
        ((labelsale == undefined) ? '' : `<div class="item-product__label sale">${labelsale}</div>`) +
        ((labelnew == undefined) ? '' : `<div class="item-product__label new">${labelnew}</div>`) +
        `<div class="item-product__img">
            <img src="${image}"/></div>
            <div class="item-product__info">
            <div class="item-product__name">${name}</div>
            <div class="item-product__sort">${sort}</div>
            <div class="item-product__prices">
              <div class="item-product__price-now">${price}</div>` +
        ((price2 == undefined) ? '' : `<div class="item-product__price-before">${price2}</div>`) +
        `</div>
              </div>
              <div class="item-product__options">
              <div class="item-product__link">
              <a href="javascript://" class="item-product__button btn_white">Add to cart</a>
              <a href="javascript://" class="item-product__link-share"><img src="images/icons/share_icon.svg" width=18px> Share</a>
              <a href="javascript://" class="item-product__link-like"><img src="images/icons/heart-w_icon.svg" width=20px> Like</a>
              </div>
              </div>
    </div>
    `;
    });


    document.querySelector('.products__items').innerHTML = htmlCatalog;
  }
}
const productsItems = new Products();
productsItems.render();

let selectedItems = document.querySelectorAll('.item-product');

for (let i = 0; i < selectedItems.length; i++) {
  const selectedItem = selectedItems[i];
  selectedItem.addEventListener('mouseenter', function (e) {
    selectedItem.classList.add('_active');
    selectedItem.lastElementChild.style.display = 'block'
  });
  selectedItem.addEventListener('mouseleave', function (e) {
    selectedItem.classList.remove('_active');
    selectedItem.lastElementChild.style.display = 'none'
  })
}

const btn = document.querySelector('.products__button').addEventListener('click', function () {
  alert('Файл не найден')
});