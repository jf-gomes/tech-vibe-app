import CategoryProducts from "../../components/categoryProducts"
import Header from "../../components/header"
import TrendingProducts from "../../components/trendingProducts"

import { ScrollView } from "react-native"

export default function Home(){
    return (
        <ScrollView>
            <Header />
            <TrendingProducts />
            <CategoryProducts />
        </ScrollView>
    )
}