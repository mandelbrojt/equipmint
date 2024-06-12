import { v4 as uuid } from "https://jspm.dev/uuid"

export const equipmentArray = [
    {
        name: "Dell XPS Desktop 8960",
        category: "desktops",
        specs: ["Intel Core i7", "16GB RAM", "1 TB SSD", "NVIDIA RTX 4060 Ti"],
        id: uuid(),
        price: 1400,
        thumbnail: '/img/products/dell-xps.png',
        url: 'https://www.dell.com/en-us/shop/desktop-computers/new-xps-desktop/spd/xps-8960-desktop/usexpsthcto8960rpl21'
    },
    {
        name: "iPad 10th gen",
        category: "tablets",
        specs: ["10.9-inch", "64GB", "Wi-Fi", "Apple Pencil", "Magic Keyboard"],
        id: uuid(),
        price: 700,
        thumbnail: '/img/products/ipad-10th-gen-magic-keyboard.jpeg',
        url: 'https://www.apple.com/ipad-10.9/'
    },
    {
        name: "Lenovo Legion 7",
        category: "laptops",
        specs: ["Intel Core i9", "32GB RAM", "2TB SSD", "NVIDIA RTX 4090"],
        id: uuid(),
        price: 2442,
        thumbnail: '/img/products/lenovo-legion-7.png',
        url: 'https://www.lenovo.com/us/en/p/laptops/legion-laptops/legion-pro-series/lenovo-legion-pro-7i-gen-9-(16-inch-intel)/len101g0034'
    },
    {
        name: "Equipment XYZ",
        category: "ABC",
        specs: ["spec1", "spec2", "spec3"],
        id: uuid(),
        price: 12345,
        thumbnail: '/img/products',
        url: 'wwww.somewhere.com'
    },
    {
        name: "Equipment XYZ",
        category: "ABC",
        specs: ["spec1", "spec2", "spec3"],
        id: uuid(),
        price: 12345,
        thumbnail: '/img/products',
        url: 'wwww.somewhere.com'
    },
    {
        name: "Galaxy Tab S9 FE+",
        category: "tablets",
        specs: ["12.4-inch", "8GB RAM", "128GB SSD", "Wi-Fi"],
        id: uuid(),
        price: 600,
        thumbnail: '/img/products/galaxy-tab-s9-fe-plus.png',
        url: 'https://www.samsung.com/us/tablets/galaxy-tab-s9-fe/'
    },
    {
        name: "Starforge Navigator",
        category: "desktops",
        specs: ["AMD Ryzen 5", "32GB RAM", "1TB SSD", "NVIDIA RTX 4070"],
        id: uuid(),
        price: 1900,
        thumbnail: '/img/products/navigator-hero.png',
        url: 'https://starforgesystems.com/products/navigator'
    },
    {
        name: "Mac Pro",
        category: "desktops",
        specs: ["Apple M2", "64GB RAM", "1TB SSD", "60-core GPU"],
        id: uuid(),
        price: 7000,
        thumbnail: '/img/products/mac-pro-tower.jpeg',
        url: 'https://www.apple.com/am/mac-pro/'
    },
    {
        name: 'MacBook Air 15-inch',
        category: "laptops",
        specs: ["Apple M3", "8GB RAM", "256GB SSD", "10-core GPU"],
        id: uuid(),
        price: 1300,
        thumbnail: '/img/products/macbook-air-15-m3.jpeg',
        url: 'https://www.apple.com/shop/buy-mac/macbook-air/15-inch-m3'
    },
    {
        name: "Equipment XYZ",
        category: "ABC",
        specs: ["spec1", "spec2", "spec3"],
        id: uuid(),
        price: 12345,
        thumbnail: '/img/products',
        url: 'wwww.somewhere.com'
    },
]