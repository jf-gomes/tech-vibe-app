import CategoryProducts from "../../components/categoryProducts"
import Header from "../../components/header"
import TrendingProducts from "../../components/trendingProducts"

export default function Home(){
    return (
        <>
            <Header />
            <TrendingProducts />
            <CategoryProducts />
        </>
    )
}