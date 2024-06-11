// import { equipmentArray } from "./equipmentData"

/* DIALOG MANAGEMENT */
const openLeasingDialogButton = document.getElementById("open-leasing-dialog")
const leasingDialog = document.getElementById("leasing-dialog")
const closeLeasingDialogButton = document.getElementById("close-leasing-dialog")

openLeasingDialogButton.addEventListener("click", () => leasingDialog.showModal())
closeLeasingDialogButton.addEventListener("click", () => leasingDialog.close())