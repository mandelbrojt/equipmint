import { equipmentArray } from "./equipmentData.js"
import { populateLeasingDialog } from "./populateLeasingDialog.js"
import { renderEquipments } from "./renderEquipments.js"
import { validateCouponCode } from "./applyCouponCode.js"


const leasingDialog = document.getElementById("leasing-dialog")
const closeLeasingDialogButton = document.getElementById("close-leasing-dialog")
const applyCouponButton = document.getElementById("apply-coupon-btn")
const currentCouponCode = document.getElementById("coupon-code-input")

renderEquipments()

closeLeasingDialogButton.addEventListener("click", () => leasingDialog.close())

applyCouponButton.addEventListener("click", validateCouponCode(currentCouponCode))

document.addEventListener("click", function(event) {
    // console.log(event)
    if (event.target.dataset.productId) {
        populateLeasingDialog(event.target.dataset.productId)
        leasingDialog.showModal()
    }
})
