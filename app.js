let goodsCounter = document.querySelector(".count-goods");
let addBtn = document.querySelectorAll(".add-cart-btn");
let likeBtn = document.querySelectorAll(".like");
let modalBlock = document.querySelector(".modal-wraper");
let closeBtn = document.querySelector(".modal-close-btn");
let detalsBtn = document.querySelectorAll(".detals-btn");
let numberGoodsCounter = 0;

// підрахунок товарів в корзині

// function goodsInCartCounter() {
//   for (button of addBtn) {
//     button.addEventListener("click", goodsInCartCounter);
//   }
//   goodsCounter.textContent = numberGoodsCounter++;
// }

// goodsInCartCounter();

for (button of addBtn) {
  button.addEventListener("click", function () {
    goodsCounter.textContent = ++numberGoodsCounter;
  });
}
// end

// like btn

for (like of likeBtn) {
  like.addEventListener("click", function () {
    if (this.classList.contains("like-on-click")) {
      this.classList.remove("like-on-click");
    } else {
      this.classList.add("like-on-click");
    }
  });
}
// end

// modal block

for (detals of detalsBtn) {
  detals.addEventListener("click", function () {
    modalBlock.classList.remove("disable");
  });
}

closeBtn.addEventListener("click", function () {
  modalBlock.classList.add("disable");
});
