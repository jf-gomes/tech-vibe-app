import { ProductDisplayProps } from "../components/productDisplay/product"

export const PRODUCTS: ProductDisplayProps[] = [
    {
        id: "0",
        name: "Macbook",
        price: 6999.99,
        img: "../../../assets/macbook.jpg",
        category: "laptop",
        trending: true,
        cartCount: 1,
    },
    {
        id: "1",
        name: "iPhone 15 Pro Max",
        price: 4999.99,
        img: "../../../assets/iphone.jpg",
        category: "phone",
        trending: true,
        cartCount: 0,
    },
    {
        id: "2",
        name: "iPhone 14 Pro Max",
        price: 4999.99,
        img: "../../../assets/iphone.jpg",
        category: "phone",
        trending: false,
        cartCount: 0,
    },
    {
        id: "3",
        name: "Galaxy Buds 4",
        price: 1199.99,
        img: "../../../assets/iphone.jpg",
        category: "accessories",
        trending: false,
        cartCount: 1,
    }
]