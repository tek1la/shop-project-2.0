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
// те ж саме що і вище!!!

// likeBtn.forEach((item) => {
//   item.addEventListener("click", function() {
//     item.classList.toggle("like-on-click");
//   })
// })

// end

// modal block

function closeModal() {
  modalBlock.classList.add("disable");
}

for (detals of detalsBtn) {
  detals.addEventListener("click", function () {
    modalBlock.classList.remove("disable");
    // modalBlock.style.display = "block";     можна просто додати стиль через атрибут style
  });
}

closeBtn.addEventListener("click", closeModal);

modalBlock.addEventListener("click", function (e) {
  if (e.target === modalBlock) {
    closeModal();
  }
});

$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});
