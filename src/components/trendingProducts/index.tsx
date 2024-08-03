import { FlatList, View } from "react-native";
import Title from "../title";
import TrendingProductDisplay from "../trendingProductDisplay";

import { PRODUCTS } from "../../utils/products";

export default function TrendingProducts(){

    return (
        <View className="px-6 rounded-tl-3xl rounded-tr-3xl">
            <Title content="Mais vendidos" />
            <View className="flex-row">
                <FlatList 
                    data={PRODUCTS.filter((product) => product.trending)}
                    renderItem={({item}) => <TrendingProductDisplay product={item} />}
                    horizontal
                />
            </View>
        </View>
    )
}