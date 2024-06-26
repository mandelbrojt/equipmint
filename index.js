import { populateLeaseDialog } from "./leaseDialogManager.js"
import { renderEquipments } from "./renderEquipments.js"

// const leasingDialog = document.getElementById("leasing-dialog")
// const closeLeasingDialogButton = document.getElementById("close-leasing-dialog")

renderEquipments()

// closeLeasingDialogButton.addEventListener("click", () => leasingDialog.close())

document.addEventListener("click", function(event) {
    // console.log(event)
    if (event.target.dataset.productId) {
        populateLeaseDialog(event.target.dataset.productId)
    }
})
