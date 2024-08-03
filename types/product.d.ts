export interface ProductDisplayProps{
    id: string,
    img: string,
    cartImg: string,
    price: number,
    name: string,
    category: string,
    trending: boolean,
    cartCount: number,
    brand: string,
    onWishlist: boolean
}