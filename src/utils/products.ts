import { ProductDisplayProps } from "../components/productDisplay/product"

export const PRODUCTS: ProductDisplayProps[] = [
    {
        id: "0",
        name: "Macbook",
        price: "6.999,99",
        img: "../../../assets/macbook.jpg",
        category: "laptop",
        trending: true
    },
    {
        id: "1",
        name: "iPhone 15 Pro Max",
        price: "4.999,99",
        img: "../../../assets/iphone.jpg",
        category: "phone",
        trending: true,
    },
    {
        id: "2",
        name: "iPhone 14 Pro Max",
        price: "4.999,99",
        img: "../../../assets/iphone.jpg",
        category: "phone",
        trending: false,
    },
    {
        id: "3",
        name: "Galaxy Buds 4",
        price: "4.999,99",
        img: "../../../assets/iphone.jpg",
        category: "accessories",
        trending: false
    }
]