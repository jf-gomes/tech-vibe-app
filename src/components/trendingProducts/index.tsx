import { FlatList, Text, View } from "react-native";
import Title from "../title";
import ProductDisplay, { ProductDisplayProps } from "../productDisplay";

export default function TrendingProducts(){

    const trendingProduts: ProductDisplayProps[] = [
        {
            id: "0",
            name: "Macbook",
            price: "6.999,99",
            img: "../../../assets/macbook.jpg"
        },
        {
            id: "1",
            name: "iPhone 15 Pro Max",
            price: "4.999,99",
            img: "../../../assets/iphone.jpg"
        }
    ]

    return (
        <View className="mx-6">
            <Title content="Mais vendidos" />
            <View className="flex-row">
                <FlatList 
                    data={trendingProduts}
                    renderItem={({item}) => <ProductDisplay product={item} />}
                    horizontal
                />
            </View>
        </View>
    )
}