const validCoupon = "EQM20"
const couponValidationMessage = document.getElementById("coupon-validation-message")
const couponCodeInput = document.getElementById("coupon-code-input")
const couponCodeValue = couponCodeInput.value
let couponIsUsed = false

export function applyCouponCode() {
    const couponIsValid = validateCouponCode(couponCodeValue)

    if (couponIsValid) {
        couponValidationMessage.classList.toggle("successful-message")
        couponValidationMessage.textContent = "Coupon is valid!"
        couponIsUsed = true
    }
    else {
        couponValidationMessage.classList.toggle("warning-message")
        couponValidationMessage.textContent = "Invalid coupon. Please try again."
    }
}

export function validateCouponCode(couponCode) {
    return !couponIsUsed && couponCode === validCoupon;
}