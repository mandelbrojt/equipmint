import { equipmentArray } from "./equipmentData.js"

const defaultLeasingTerm = 12

export function populateLeasingDialog(equipmentId) {
    const filteredData = equipmentArray.filter(equipment => equipment.id === equipmentId)[0]
    // console.log(filteredData)
    const productSource = document.getElementById("leasing-dialog-product-source")
    const productName = document.getElementById("leasing-dialog-product-title")
    const currentPrice = document.getElementById("leasing-dialog-current-price")
    const leasingTerm = document.getElementById("leasing-dialog-selected-term")
    
    productSource.setAttribute("href", filteredData.url)
    productName.textContent = filteredData.name
    currentPrice.textContent = `$${filteredData.price.toLocaleString("en-US")} USD`
    leasingTerm.textContent = `${defaultLeasingTerm} months`
}