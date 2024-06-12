import { equipmentArray } from "./equipmentData.js"

const mainContent = document.getElementById("main-content")

/* LEASING MODAL MANAGER */
const leasingDialog = document.getElementById("leasing-dialog")
// const closeLeasingDialogButton = document.getElementById("close-leasing-dialog")

// openLeasingDialogButton.addEventListener("click", () => leasingDialog.showModal())
// closeLeasingDialogButton.addEventListener("click", () => leasingDialog.close())

document.addEventListener("click", function(event) {
    // console.log(event)
    if (event.target.dataset.productId) {
        populateLeasingDialog(event.target.dataset.productId)
        leasingDialog.showModal()
    }
})

renderEquipments()

function renderEquipments() {
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
        <button class="add-product" data-product-id="${equipment.id}">+</button>
    </div>
    </section>
    `).join("")
}

function populateLeasingDialog(equipmentId) {
    const filteredData = equipmentArray.filter(equipment => equipment.id === equipmentId)
    
    leasingDialog.innerHTML = filteredData.map(equipment => `
    <div class="leasing-dialog-header">
        <i id="close-leasing-dialog" class="fa-regular fa-circle-xmark"></i>
        <h1 class="modal-title">Leasing Details</h1>
        <a class="product-source" href="${equipment.url}" target="_blank">
            <div class="visit-product">
                <h2 class="product-title">${equipment.name}</h2>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </div>
        </a>
    </div>
    <div class="leasing-dialog-main">
        <section class="pricing-section">
            <h4>Amount to lease:</h4>
            <div class="row-container">
                <p class="curent-price-text">${equipment.price.toLocaleString("en-US")}</p>
                <input id="coupon-code" name="coupon-code" type="text" pattern="[A-Za-z]{3}[0-9]{2}" placeholder="Add coupon" pattern=""></input>
                <button>Apply</button>
            </div>
        </section>
        <section class="term-section">
            <h4>Leasing term:</h4>
            <div class="row-container">
                <p class="selected-term-text">24 months</p>
                <div id="term-buttons" class="row-container">
                    <i id="decrease-term-btn" class="fa-regular fa-square-minus"></i>
                    <i id="increase-term-btn" class="fa-regular fa-square-plus"></i>
                </div>
            </div>
            <p>$77 each</p>
        </section>
        <section class="costs-section">
            <details>
                <summary>Cost Details</summary>
                <p>Interests + Principal</p>
            </details>
        </section>
    </div>
    <div class="leasing-dialog-footer">
        <button>Add to Cart</button>
    </div>
    `).join("")
}