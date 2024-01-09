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

// counter func style
let incrementBtns = document.querySelectorAll(".increment-btn");
let decrementBtns = document.querySelectorAll(".decrement-btn");
let inputFields = document.querySelectorAll(".product-quantity input");
let minCount = 1;
let maxCount = 10;

console.log(incrementBtns);
console.log(decrementBtns);
console.log(inputFields);
// decrementBtns.disabled = true;

// function touggleButtonState(count) {
// if (+count === 1) {
//   decrementBtns.disabled = true;
// } else if (+count === 10) {
//   incrementBtns.disabled = true;
// } else if (+count > 1) {
//   decrementBtns.disabled = false;
//   incrementBtns.disabled = false;
// }
//   decrementBtns.disabled = count <= minCount;
//   incrementBtns.disabled = count >= maxCount;
// }

// incrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   inputFields.value = currentCount + 1;
//   touggleButtonState(+inputFields.value);
// });

// decrementBtns.addEventListener("click", function () {
//   let currentCount = +inputFields.value;
//   inputFields.value = currentCount - 1;
//   touggleButtonState(+inputFields.value);
// });

// OOP (обєктно орьєнтоване програмування)

function Counter(incrementBtns, decrementBtns, inputFields) {
  this.domRefs = {
    incrementBtns,
    decrementBtns,
    inputFields,
  };
  this.toggleButtonState = function () {
    let count = +this.domRefs.inputFields.value;
    this.domRefs.decrementBtns.disabled = count <= 1;
    this.domRefs.incrementBtns.disabled = count >= 10;
  };
  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputFields.value = +this.domRefs.inputFields.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputFields.value = +this.domRefs.inputFields.value - 1;
    this.toggleButtonState();
  };
  this.domRefs.incrementBtns.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtns.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}

for (i = 0; i < inputFields.length; i++) {
  const counter1 = new Counter(
    incrementBtns[i],
    decrementBtns[i],
    inputFields[i]
  );
  console.log(counter1);
}
