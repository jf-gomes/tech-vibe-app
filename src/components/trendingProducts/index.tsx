import { FlatList, Text, View } from "react-native";
import Title from "../title";
import ProductDisplay from "../productDisplay";

import { TRENDING_PRODUCTS } from "../../utils/trendingProducts";

export default function TrendingProducts(){

    return (
        <View className="mx-6">
            <Title content="Mais vendidos" />
            <View className="flex-row">
                <FlatList 
                    data={TRENDING_PRODUCTS}
                    renderItem={({item}) => <ProductDisplay product={item} />}
                    horizontal
                />
            </View>
        </View>
    )
}