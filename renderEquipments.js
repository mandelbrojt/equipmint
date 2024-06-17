import { equipmentArray } from "./equipmentData.js"

const mainContent = document.getElementById("main-content")

export function renderEquipments() {
    mainContent.innerHTML = equipmentArray.map(equipment => `
    <section class="product-container glassmorphic-card">
    <div class="image-section">
        <img class="product-thumbnail" src="${equipment.thumbnail}" alt="">
        <p class="category-chip">${equipment.category}</p>
    </div>
    <div class="info-section">
        <h3 class="product-title">${equipment.name}</h3>
        <p class="product-specs">${equipment.specs.join(", ")}</p>
        <h4 class="product-price">$${equipment.price.toLocaleString("en-US")} USD</h4>
    </div>
    <div class="button-section">
        <i id="add-product-btn" class="fa-solid fa-circle-plus inc-dec" data-product-id="${equipment.id}"></i>
    </div>
    </section>
    `).join("")
}