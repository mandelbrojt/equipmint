import { equipmentArray } from "./equipmentData.js"

export function populateLeaseDialog(equipmentId) {
    const modal = document.getElementById("lease-dialog")
    const data = equipmentArray.filter(equipment => equipment.id === equipmentId)[0]
    
    let initialLeaseTerm = 12
    let monthlyInstallmentAmount = Number((data.price / initialLeaseTerm).toFixed(2))
    let modalContent = `
        <div class="lease-dialog-header">
            <i id="close-lease-dialog" class="fa-regular fa-circle-xmark inc-dec"></i>
            <h1 class="modal-title">Leasing Details</h1>
            <a id="lease-dialog-product-source" class="product-link" href=${data.url} target="_blank">
                <div class="visit-product">
                    <h2 id="lease-dialog-product-title" class="product-name">${data.name}</h2>
                    <i id="product-link-icon" class="fa-solid fa-arrow-up-right-from-square inc-dec"></i>
                </div>
            </a>
        </div>
        <div class="lease-dialog-main">
            <section class="pricing-section">
                <h4>Amount to lease:</h4>
                <p id="lease-dialog-current-price" class="curent-price-text">$${data.price.toLocaleString("en-US")}</p>
            </section>
            <section class="term-section">
                <h4>Leasing term:</h4>
                <div id="term-controls" class="row-container">
                    <div class="installments-container">
                        <p id="lease-dialog-selected-term" class="selected-term-text">${initialLeaseTerm} months</p>
                        <p id="installments-amount" class="installments-text">$${monthlyInstallmentAmount.toLocaleString("en-US")} each month</p>
                    </div>
                    <div id="term-buttons" class="row-container">
                        <i id="decrease-term-btn" class="fa-regular fa-square-minus inc-dec"></i>
                        <i id="increase-term-btn" class="fa-regular fa-square-plus inc-dec"></i>
                    </div>
                </div>
            </section>
            <section class="costs-section">
                <details>
                    <summary>Cost Details</summary>
                    <p>Principal: $X</p>
                    <p>Interests: $X</p>
                </details>
            </section>
        </div>
        <div class="lease-dialog-footer">
            <button>Add to Cart</button>
        </div>
    `

    modal.innerHTML = modalContent // Clear previous content and set new content
    modal.showModal()

    const closeLeaseDialogButton = document.getElementById("close-lease-dialog")
    closeLeaseDialogButton.addEventListener("click", function() {
        modal.close()
        modal.innerHTML = "" // Clear the content when closing
    })
}