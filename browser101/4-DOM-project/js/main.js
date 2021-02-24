"use strict";

class ShoppingApp {
  constructor() {
    // 쇼핑 리스트
    this.$shoppingList = document.querySelector(".shopping-list");
    this.handlingAddItem();
    this.handlingDeleteItem();
  }

  handlingDeleteItem() {
    this.$shoppingList.addEventListener("click", (e) => {
      const { target } = e;
      if (
        target.className === "delete-item" ||
        target.parentNode.className === "delete-item"
      ) {
        target.closest("li").remove();
      }
    });
  }

  handlingAddItem() {
    const $shoppingForm = document.querySelector(".shopping-form");
    const $shoppingInput = document.querySelector(".shopping-input");
    $shoppingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if ($shoppingInput.value === "") {
        return;
      }
      this.addItem($shoppingInput.value);
      $shoppingInput.value = "";
      $shoppingInput.focus();
    });
  }

  addItem(data) {
    const $item = document.createElement("li");
    $item.innerHTML = `
        <span class="shopping-item">${data}</span> 
        <button class="delete-item">
            <i class="fas fa-trash-alt"></i>
            <span class="hidden">삭제</span>
        </button>
    `;
    this.$shoppingList.appendChild($item);
  }
}

const shoppingApp = new ShoppingApp();
