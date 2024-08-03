import CategoryProducts from "../../components/categoryProducts"
import Header from "../../components/header"
import SearchBar from "../../components/searchBar"
import TrendingProducts from "../../components/trendingProducts"
import { View } from "react-native"
import { ScrollView } from "react-native"
import Banner from "../../components/banner"

export default function Home(){
    return (
        <ScrollView className="w-full bg-white">
            <Header />
            <Banner />
            <SearchBar />
            <View className="bg-lightBlue rounded-tl-3xl rounded-tr-3xl mt-6 shadow">
                <TrendingProducts />
                <CategoryProducts />
            </View>
        </ScrollView>
    )
}