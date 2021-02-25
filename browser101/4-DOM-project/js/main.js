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
      if (target.closest("button[data-id]")) {
        const id = target.closest("button[data-id]").dataset.id;
        document.querySelector(`li[data-id="${id}"]`).remove();
      }
    });
  }

  id = 0; // UUID

  handlingAddItem() {
    const $shoppingForm = document.querySelector(".shopping-form");
    const $shoppingInput = document.querySelector(".shopping-input");

    $shoppingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if ($shoppingInput.value === "") {
        return;
      }
      this.addItem($shoppingInput.value);
      this.$item.scrollIntoView();
      $shoppingInput.value = "";
      $shoppingInput.focus();
    });
  }

  addItem(data) {
    const $item = document.createElement("li");
    $item.setAttribute("data-id", this.id);
    $item.innerHTML = `
        <span class="shopping-item">${data}</span> 
        <button class="delete-item" data-id=${this.id}>
            <i class="fas fa-trash-alt"></i>
            <span class="hidden">삭제</span>
        </button>
    `;
    this.id++;
    this.$item = $item;
    this.$shoppingList.appendChild($item);
  }
}

const shoppingApp = new ShoppingApp();
