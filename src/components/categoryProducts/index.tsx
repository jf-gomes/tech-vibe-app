import { View, FlatList, Text } from "react-native";
import Title from "../title";
import CategorySelector from "../categorySelector";
import { PRODUCTS } from "../../utils/products";
import ProductDisplay from "../productDisplay";
import { useState } from "react";

export default function CategoryProducts(){

    const [selectedCategory, setSelectedCategory] = useState<string>("all")

    return (
        <View className="mx-6">
            <Title content="Categorias" />
            <CategorySelector setSelectedCategory={setSelectedCategory} />
            <FlatList 
                data={selectedCategory != "all" ? PRODUCTS.filter((product) => product.category == selectedCategory) : PRODUCTS}
                renderItem={({ item }) => <ProductDisplay product={item} />}
                horizontal
            />
        </View>
    )
}