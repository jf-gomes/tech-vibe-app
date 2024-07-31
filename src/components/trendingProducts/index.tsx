import { FlatList, View } from "react-native";
import Title from "../title";
import ProductDisplay from "../productDisplay";

import { PRODUCTS } from "../../utils/products";

export default function TrendingProducts(){

    return (
        <View className="mx-6">
            <Title content="Mais vendidos" />
            <View className="flex-row">
                <FlatList 
                    data={PRODUCTS.filter((product) => product.trending)}
                    renderItem={({item}) => <ProductDisplay product={item} />}
                    horizontal
                />
            </View>
        </View>
    )
}