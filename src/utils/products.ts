import { ProductDisplayProps } from "../components/productDisplay/product"

export const PRODUCTS: ProductDisplayProps[] = [
    {
        id: "0",
        name: "Macbook Air M1",
        price: 6999.99,
        brand: "Apple",
        img: "https://i.imgur.com/USf5Igg.jpg",
        cartImg: "https://i.imgur.com/G3MYWWu.png",
        category: "laptop",
        trending: true,
        cartCount: 1,
    },
    {
        id: "1",
        name: "iPhone 15 Pro",
        price: 4999.99,
        brand: "Apple",
        img: "https://i.imgur.com/6o58Vck.jpg",
        cartImg: "https://i.imgur.com/CLoVSxG.png",
        category: "phone",
        trending: true,
        cartCount: 0,
    },
    {
        id: "2",
        name: "iPhone 14 Pro",
        price: 4999.99,
        brand: "Apple",
        img: "https://i.imgur.com/5r8WjIj.jpg",
        cartImg: "https://i.imgur.com/5iKS6kD.png",
        category: "phone",
        trending: false,
        cartCount: 0,
    },
    {
        id: "3",
        name: "Galaxy Buds 4",
        price: 1199.99,
        brand: "Samsung",
        img: "https://i.imgur.com/oyZcgCL.jpg",
        cartImg: "https://i.imgur.com/E5L3Lzt.png",
        category: "accessories",
        trending: false,
        cartCount: 1,
    }
]