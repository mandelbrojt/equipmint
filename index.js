import { populateLeaseDialog } from "./leaseDialogManager.js"
import { renderEquipments } from "./renderEquipments.js"

renderEquipments()

document.addEventListener("click", function(event) {
    // console.log(event)
    if (event.target.dataset.productId) {
        populateLeaseDialog(event.target.dataset.productId)
    }
})
