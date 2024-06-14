import { equipmentArray } from "./equipmentData.js"

const defaultLeasingTerm = 12
const mainContent = document.getElementById("main-content")
const leasingDialog = document.getElementById("leasing-dialog")
const closeLeasingDialogButton = document.getElementById("close-leasing-dialog")

closeLeasingDialogButton.addEventListener("click", () => leasingDialog.close())

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
        <i id="add-product-btn" class="fa-solid fa-circle-plus inc-dec" data-product-id="${equipment.id}"></i>
    </div>
    </section>
    `).join("")
}

function populateLeasingDialog(equipmentId) {
    const filteredData = equipmentArray.filter(equipment => equipment.id === equipmentId)[0]
    // console.log(filteredData)
    const productSource = document.getElementById("leasing-dialog-product-source")
    const productName = document.getElementById("leasing-dialog-product-title")
    const currentPrice = document.getElementById("leasing-dialog-current-price")
    const leasingTerm = document.getElementById("leasing-dialog-selected-term")
    
    productSource.setAttribute("href", filteredData.url)
    productName.textContent = filteredData.name
    currentPrice.textContent = `${filteredData.price.toLocaleString("en-US")} USD`
    leasingTerm.textContent = `${defaultLeasingTerm} months`
}