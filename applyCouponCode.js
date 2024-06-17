const validCoupon = "EQM20"
let isCouponUsed = false

export function validateCouponCode(couponCode) {
    if (!isCouponUsed) {
        if (couponCode === validCoupon) {
            console.log("The coupon is valid...")
        }
        else {
            console.log("The coupon is NOT valid...")
        }
    }
}
function applyCouponCode() {}