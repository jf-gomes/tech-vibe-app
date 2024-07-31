import { View, FlatList } from "react-native";
import Title from "../title";
import CategorySelector from "../categorySelector";
import { PRODUCTS } from "../../utils/products";
import ProductDisplay from "../productDisplay";
import { useState } from "react";

export default function CategoryProducts(){

    const [selectedCategory, setSelectedCategory] = useState<string>("phone")

    return (
        <View className="mx-6">
            <Title content="Categorias" />
            <CategorySelector />
            <FlatList 
                data={PRODUCTS.filter((product) => product.category == selectedCategory)}
                renderItem={({ item }) => <ProductDisplay product={item} />}
                horizontal
            />
        </View>
    )
}